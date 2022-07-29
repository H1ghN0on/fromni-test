import React from "react";
import { Channel } from "../../contexts/NewUserContext";
import Aside from "./Aside";
import Content from "./Content";
import * as S from "../../styles/styled";

const Main = () => {
  const [activeChannel, setActiveChannel] = React.useState<Channel | null>(
    null
  );

  const handleChannelClick = (channel: Channel) => {
    setActiveChannel(channel);
  };

  return (
    <S.MainWrapper>
      <Aside
        activeChannel={activeChannel}
        onChannelClick={handleChannelClick}
      />
      <Content />
    </S.MainWrapper>
  );
};

export default Main;
