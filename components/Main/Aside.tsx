import React from "react";
import { useRouter } from "next/router";

import { ImCheckmark, ImCross } from "react-icons/im";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiExit, BiSave } from "react-icons/bi";

import * as S from "@styles/styled";
import { Channel, ChannelInfoType } from "@types";

interface AsideProps {
  onChannelClick: (channel: Channel) => void;
  channelsInfo: ChannelInfoType[];
}

const Aside: React.FC<AsideProps> = ({ onChannelClick, channelsInfo }) => {
  const router = useRouter();

  const handleChannelClick = (channel: ChannelInfoType) => {
    onChannelClick(channel.info);
  };

  const handleExitClick = () => {
    if (channelsInfo.findIndex((channel) => channel.unsaved) !== -1) {
      if (
        confirm("У вас остались не сохранённые изменение, всё равно выйти?")
      ) {
        router.push("/");
      }
    } else {
      router.push("/");
    }
  };

  return (
    <S.MainAside>
      <S.ChannelList>
        {channelsInfo &&
          channelsInfo.map((channel) => (
            <S.Channel
              onClick={() => {
                handleChannelClick(channel);
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
              <S.ChannelIcons>
                <S.ChannelEnableIcon>
                  {channel.enabled ? <ImCheckmark /> : <ImCross />}
                </S.ChannelEnableIcon>
                <S.ChannelSaveIcon>
                  {channel.unsaved && <BiSave />}
                </S.ChannelSaveIcon>
              </S.ChannelIcons>
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
