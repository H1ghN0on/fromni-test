import React from "react";
import * as S from "@styles/styled";
import {} from "@contexts/NewUserContext";
import { Channel } from "@types";

interface ModalChannelCardProps {
  channel: Channel;
  active: Boolean;
  onClick: (channel: Channel) => void;
}

const ModalChannelCard: React.FC<ModalChannelCardProps> = ({
  channel,
  active,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(channel);
  };
  return (
    <S.ModalChannelCard onClick={handleClick} active={active}>
      <S.ModalChannelIcon>
        <channel.icon />
      </S.ModalChannelIcon>
      <S.ModalChannelCardName>{channel.name}</S.ModalChannelCardName>
    </S.ModalChannelCard>
  );
};

export default ModalChannelCard;
