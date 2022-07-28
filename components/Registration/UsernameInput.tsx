import React from "react";
import { NewUserContext } from "../../contexts/NewUserContext";
import * as S from "../../styles/styled";

const UsernameInput = () => {
  const userData = React.useContext(NewUserContext);
  const [name, setName] = React.useState<string>("");

  const handleNextBtnClick = () => {
    userData.setContext({
      ...userData,
      currentFragment: userData.currentFragment + 1,
    });
  };
  return (
    <>
      <S.ModalTitle>Добрый день 👋</S.ModalTitle>
      <S.InputBox>
        <S.InputLabel>Введите имя</S.InputLabel>
        <S.Input
          placeholder="Имя..."
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
      </S.InputBox>
      <S.Button onClick={handleNextBtnClick} disabled={!name}>
        Далее
      </S.Button>
    </>
  );
};

export default UsernameInput;
