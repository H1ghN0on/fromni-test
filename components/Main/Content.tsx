import React from "react";
import { ThemeProvider } from "styled-components";
import { ChannelInfoType } from ".";
import { Channel } from "../../contexts/NewUserContext";
import * as S from "../../styles/styled";
import Droppable from "../Droppable";
import KeyboardBox, { KeyboardTypeType } from "../KeyboardBox";
import { KeyboardButtonType } from "../KeyboardButtonAdd";
import MessageBox from "./MessageBox";

interface ContentProps {
  channelInfo: ChannelInfoType;
  updateChannelInfo: (info: ChannelInfoType) => void;
}

export const keyboardTypes: KeyboardTypeType[] = [
  {
    name: "Стандартная",
    accessor: "standard",
  },
  { name: "Inline", accessor: "inline" },
];

const Content: React.FC<ContentProps> = ({
  updateChannelInfo,
  channelInfo,
}) => {
  const handleButtonAdd = (button: Omit<KeyboardButtonType, "id">) => {
    updateChannelInfo({
      ...channelInfo,
      buttons: channelInfo.buttons.concat([
        {
          ...button,
          id: channelInfo.buttons.length,
        },
      ]),
    });
  };

  const handleEditButton = (button: KeyboardButtonType) => {
    updateChannelInfo({
      ...channelInfo,
      buttons: channelInfo.buttons.map((_button) => {
        if (button.id === _button.id) {
          return button;
        } else return _button;
      }),
    });
  };

  const handleDeleteButton = (button: KeyboardButtonType) => {
    updateChannelInfo({
      ...channelInfo,
      buttons: channelInfo.buttons.filter(
        (_button) => button.id !== _button.id
      ),
    });
  };

  const handleKeyboardTypeChange = (type: KeyboardTypeType) => {
    updateChannelInfo({
      ...channelInfo,
      keyboardType: type,
    });
  };

  const handleSaveClick = () => {};

  return (
    <ThemeProvider theme={{ color: channelInfo.info.color }}>
      <S.MainContent>
        {channelInfo && (
          <>
            <S.ChannelEnabler>
              <S.ChannelEnablerTitle>
                {channelInfo.enabled ? "Включен" : "Выключен"}
              </S.ChannelEnablerTitle>
              <S.Switch
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  updateChannelInfo({
                    ...channelInfo,
                    enabled: e.target.checked,
                  });
                }}
                type="checkbox"
                checked={channelInfo.enabled}
              />
            </S.ChannelEnabler>
            <Droppable name="Сообщение">
              <MessageBox
                value={channelInfo.message}
                maxSize={
                  channelInfo.info.message &&
                  (channelInfo.info.message.limit ?? Infinity)
                }
                onChange={(value) =>
                  updateChannelInfo({ ...channelInfo, message: value })
                }
              ></MessageBox>
            </Droppable>
            {channelInfo.info.keyboard.support && (
              <>
                <Droppable name="Клавиатура">
                  <KeyboardBox
                    urlSupport={
                      channelInfo.info.keyboard.support &&
                      channelInfo.info.keyboard[
                        channelInfo.keyboardType.accessor as
                          | "standard"
                          | "inline"
                      ].urlSupport &&
                      (!channelInfo.info.keyboard[
                        channelInfo.keyboardType.accessor as
                          | "standard"
                          | "inline"
                      ].urlLimit ||
                        channelInfo.info.keyboard[
                          channelInfo.keyboardType.accessor as
                            | "standard"
                            | "inline"
                        ].urlLimit! >
                          channelInfo.buttons.filter(
                            (button) => button.type.accessor === "url"
                          ).length)
                    }
                    keyboardType={channelInfo.keyboardType}
                    items={channelInfo.buttons}
                    onButtonAdd={handleButtonAdd}
                    onKeyboardChange={handleKeyboardTypeChange}
                    onButtonEdit={handleEditButton}
                    onButtonDelete={handleDeleteButton}
                    maxButtonNumber={
                      channelInfo.info.keyboard.support &&
                      (channelInfo.info.keyboard[
                        channelInfo.keyboardType.accessor as
                          | "standard"
                          | "inline"
                      ].limit ??
                        Infinity)
                    }
                    maxButtonLength={
                      channelInfo.info.keyboard.support &&
                      (channelInfo.info.keyboard[
                        channelInfo.keyboardType.accessor as
                          | "standard"
                          | "inline"
                      ].lengthLimit ??
                        Infinity)
                    }
                  />
                </Droppable>
              </>
            )}
            <S.ContentButtonWrapper>
              <S.ContentButton
                disabled={
                  !channelInfo.info.keyboard.support ||
                  channelInfo.info.keyboard[
                    channelInfo.keyboardType.accessor as "standard" | "inline"
                  ].lengthLimit! > channelInfo.buttons.length
                }
                onClick={handleSaveClick}
              >
                Сохранить
              </S.ContentButton>
            </S.ContentButtonWrapper>
          </>
        )}
      </S.MainContent>
    </ThemeProvider>
  );
};

export default Content;
