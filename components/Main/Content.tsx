import React from "react";
import * as S from "../../styles/styled";
import Droppable from "../Droppable";
import KeyboardBox, { KeyboardTypeType } from "../KeyboardBox";
import { KeyboardButtonType } from "../KeyboardButtonAdd";
import MessageBox from "./MessageBox";

const Content = () => {
  const [message, setMessage] = React.useState<string>("");
  const [keyboardButtons, setKeyboardButtons] = React.useState<
    KeyboardButtonType[]
  >([]);

  const [activeType, setActiveType] = React.useState<KeyboardTypeType>();

  const handleButtonAdd = (button: Omit<KeyboardButtonType, "id">) => {
    setKeyboardButtons(
      keyboardButtons.concat([
        {
          ...button,
          id: keyboardButtons.length,
        },
      ])
    );
  };

  const handleEditButton = (button: KeyboardButtonType) => {
    setKeyboardButtons(
      keyboardButtons.map((_button) => {
        if (button.id === _button.id) {
          return button;
        } else return _button;
      })
    );
  };

  const handleDeleteButton = (button: KeyboardButtonType) => {
    setKeyboardButtons(
      keyboardButtons.filter((_button) => button.id !== _button.id)
    );
  };

  const handleSaveClick = () => {};

  return (
    <S.MainContent>
      <Droppable name="Сообщение">
        <MessageBox
          value={message}
          maxSize={30}
          onChange={(value) => setMessage(value)}
        ></MessageBox>
      </Droppable>
      <Droppable name="Клавиатура">
        <KeyboardBox
          items={keyboardButtons}
          onButtonAdd={handleButtonAdd}
          onKeyboardChange={(type) => {
            setActiveType(type);
          }}
          onButtonEdit={handleEditButton}
          onButtonDelete={handleDeleteButton}
          maxButtonNumber={10}
          maxButtonLength={40}
        />
      </Droppable>
      <S.ContentButtonWrapper>
        <S.ContentButton
          disabled={keyboardButtons.length > 10}
          onClick={handleSaveClick}
        >
          Сохранить
        </S.ContentButton>
      </S.ContentButtonWrapper>
    </S.MainContent>
  );
};

export default Content;
