import React from "react";
import { Channel } from "../../contexts/NewUserContext";
import { ImCheckmark, ImCross } from "react-icons/im";
import channels from "../../public/Channels";
import * as S from "../../styles/styled";
import { ChannelInfoType } from ".";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { useRouter } from "next/router";
interface AsideProps {
  onChannelClick: (channel: Channel) => void;
  channelsInfo: ChannelInfoType[];
}

const Aside: React.FC<AsideProps> = ({ onChannelClick, channelsInfo }) => {
  const router = useRouter();

  const handleExitClick = () => {
    router.push("/");
  };

  return (
    <S.MainAside>
      <S.ChannelList>
        {channelsInfo &&
          channelsInfo.map((channel) => (
            <S.Channel
              onClick={() => {
                onChannelClick(channel.info);
              }}
              background={channel.info.color}
              active={channel.active}
              key={channel.info.id}
            >
              <S.ChannelInfo>
                <S.ChannelAvatar>
                  <channel.info.icon />
                </S.ChannelAvatar>
                <S.ChannelName>{channel.info.name}</S.ChannelName>
              </S.ChannelInfo>
              <S.ChannelEnableIcon>
                {channel.enabled ? <ImCheckmark /> : <ImCross />}
              </S.ChannelEnableIcon>
            </S.Channel>
          ))}
        <S.Channel
          onClick={() => {
            alert("К сожалению, не работает");
          }}
          active={false}
          background={""}
        >
          <S.ChannelInfo>
            <S.ChannelAvatar>
              <BsEnvelopeFill />
            </S.ChannelAvatar>
            <S.ChannelName>Совершить рассылку</S.ChannelName>
          </S.ChannelInfo>
        </S.Channel>
        <S.Channel onClick={handleExitClick} active={false} background={""}>
          <S.ChannelInfo>
            <S.ChannelAvatar>
              <BiExit />
            </S.ChannelAvatar>
            <S.ChannelName>Выйти</S.ChannelName>
          </S.ChannelInfo>
        </S.Channel>
      </S.ChannelList>
    </S.MainAside>
  );
};

export default Aside;
