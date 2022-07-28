import React from "react";
import { Channel } from "../../contexts/NewUserContext";
import channels from "../../public/Channels";
import * as S from "../../styles/styled";

interface AsideProps {
  onChannelClick: (channel: Channel) => void;
  activeChannel: Channel | null;
}

const Aside: React.FC<AsideProps> = ({ onChannelClick, activeChannel }) => {
  return (
    <S.MainAside>
      <S.ChannelList>
        {channels &&
          channels.map((channel) => (
            <S.Channel
              onClick={() => {
                onChannelClick(channel);
              }}
              background={channel.color}
              active={channel.id === (activeChannel && activeChannel.id)}
              key={channel.id}
            >
              <S.ChannelAvatar>
                <channel.icon />
              </S.ChannelAvatar>
              <S.ChannelName>{channel.name}</S.ChannelName>
            </S.Channel>
          ))}
      </S.ChannelList>
    </S.MainAside>
  );
};

export default Aside;
