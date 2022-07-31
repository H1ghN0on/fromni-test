import React from "react";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";

import { Api } from "@api/index";
import * as S from "@styles/styled";
import Droppable from "@components/Common/Dropdown/Droppable";
import KeyboardBox from "@components/Main/Keyboard/KeyboardBox";
import MessageBox from "@components/Main/MessageBox";
import { ChannelInfoType, KeyboardButtonType, KeyboardTypeType } from "@types";

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
  const router = useRouter();

  const handleMessageChange = (value: string) => {
    updateChannelInfo({ ...channelInfo, message: value, unsaved: true });
  };

  const handleButtonAdd = (button: Omit<KeyboardButtonType, "id">) => {
    updateChannelInfo({
      ...channelInfo,
      buttons: channelInfo.buttons.concat([
        {
          ...button,
          id: channelInfo.buttons.length,
        },
      ]),
      unsaved: true,
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
      unsaved: true,
    });
  };

  const handleDeleteButton = (button: KeyboardButtonType) => {
    updateChannelInfo({
      ...channelInfo,
      buttons: channelInfo.buttons.filter(
        (_button) => button.id !== _button.id
      ),
      unsaved: true,
    });
  };

  const handleKeyboardTypeChange = (type: KeyboardTypeType) => {
    updateChannelInfo({
      ...channelInfo,
      keyboardType: type,
      unsaved: true,
    });
  };

  const handleSaveClick = async () => {
    updateChannelInfo({
      ...channelInfo,
      unsaved: false,
    });
    await Api().updateChannel({
      name: router.query.name as string,
      channelInfo,
    });
  };

  const handleEnableChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    updateChannelInfo({
      ...channelInfo,
      enabled: e.target.checked,
    });
    try {
      await Api().enableChannel({
        name: router.query.name as string,
        channel: channelInfo.info.accessor,
        enabled: e.target.checked,
      });
    } catch (error) {
      alert("Ошибка случилась");
      console.log(error);
    }
  };

  const getKeyboardType = () => {
    return channelInfo.info.keyboard[
      channelInfo.keyboardType.accessor as "standard" | "inline"
    ];
  };

  return (
    <ThemeProvider theme={{ color: channelInfo?.info.color }}>
      <S.MainContent>
        {channelInfo ? (
          <>
            <S.ChannelEnabler>
              <S.Switch
                onChange={handleEnableChange}
                type="checkbox"
                checked={channelInfo.enabled}
              />
              <S.ChannelEnablerTitle>
                {channelInfo.enabled ? "Включен" : "Выключен"}
              </S.ChannelEnablerTitle>
            </S.ChannelEnabler>
            <Droppable name="Сообщение">
              <MessageBox
                value={channelInfo.message}
                maxSize={
                  channelInfo.info.message &&
                  (channelInfo.info.message.limit ?? Infinity)
                }
                onChange={handleMessageChange}
              ></MessageBox>
            </Droppable>
            {channelInfo.info.keyboard.support && (
              <>
                <Droppable name="Клавиатура">
                  <KeyboardBox
                    urlSupport={
                      channelInfo.info.keyboard.support &&
                      getKeyboardType().urlSupport &&
                      (!getKeyboardType().urlLimit ||
                        getKeyboardType().urlLimit! >
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
                      (getKeyboardType().limit ?? Infinity)
                    }
                    maxButtonLength={
                      channelInfo.info.keyboard.support &&
                      (getKeyboardType().lengthLimit ?? Infinity)
                    }
                  />
                </Droppable>
              </>
            )}
            <S.ContentButtonWrapper>
              <S.ContentButton
                disabled={
                  !channelInfo.info.keyboard.support ||
                  getKeyboardType().limit! < channelInfo.buttons.length ||
                  !channelInfo.unsaved ||
                  channelInfo.buttons.findIndex(
                    (button) =>
                      channelInfo.info.keyboard.support &&
                      (getKeyboardType().lengthLimit as number) <
                        button.name.length
                  ) !== -1
                }
                onClick={handleSaveClick}
              >
                Сохранить
              </S.ContentButton>
            </S.ContentButtonWrapper>
          </>
        ) : (
          <S.NoChannel>Выберите канал</S.NoChannel>
        )}
      </S.MainContent>
    </ThemeProvider>
  );
};

export default Content;
