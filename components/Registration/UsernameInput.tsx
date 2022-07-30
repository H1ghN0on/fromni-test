import { useRouter } from "next/router";
import React from "react";
import { Api } from "../../api";
import { NewUserContext } from "../../contexts/NewUserContext";
import * as S from "../../styles/styled";

const UsernameInput = () => {
  const router = useRouter();

  const userData = React.useContext(NewUserContext);

  const handleNextBtnClick = async () => {
    const exists = await Api().checkNameExistence(userData.name);
    if (exists) {
      router.push(`${userData.name}`);
      return;
    }
    userData.setContext({
      ...userData,
      currentFragment: userData.currentFragment + 1,
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    userData.setContext({
      ...userData,
      name: e.target.value,
    });
  };

  return (
    <>
      <S.ModalTitle>Добрый день 👋</S.ModalTitle>
      <S.InputBox>
        <S.InputLabel>Введите имя</S.InputLabel>
        <S.Input
          placeholder="Имя..."
          value={userData.name}
          onChange={handleNameChange}
        />
      </S.InputBox>
      <S.Button onClick={handleNextBtnClick} disabled={!userData.name}>
        Далее
      </S.Button>
    </>
  );
};

export default UsernameInput;
