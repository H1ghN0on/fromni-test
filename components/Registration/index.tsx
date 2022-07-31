import React from "react";
import * as S from "@styles/styled";
import { NewUserContext } from "@contexts/NewUserContext";
import UsernameInput from "./UsernameInput";
import ChannelInput from "./ChannelInput";

const Fragment = () => {
  const userData = React.useContext(NewUserContext);

  switch (userData.currentFragment) {
    case 0: {
      return <UsernameInput />;
    }
    case 1: {
      return <ChannelInput />;
    }

    default: {
      return <UsernameInput />;
    }
  }
};

const Registration = () => {
  return (
    <S.ModalWrapper>
      <S.ModalWindow>
        <Fragment />
      </S.ModalWindow>
    </S.ModalWrapper>
  );
};

export default Registration;
