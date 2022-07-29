import React from "react";
import { Channel } from "../../contexts/NewUserContext";
import Aside from "./Aside";
import Content from "./Content";
import * as S from "../../styles/styled";
import { channel } from "diagnostics_channel";
import { KeyboardButtonType } from "../KeyboardButtonAdd";
import { KeyboardTypeType } from "../KeyboardBox";
import channels from "../../public/Channels";

export type ChannelInfoType = {
  info: Channel;
  enabled: boolean;
  active: boolean;
  message: string;
  buttons: KeyboardButtonType[];
  keyboardType: KeyboardTypeType;
};

const Main = () => {
  const [channelsInfo, setChannelsInfo] = React.useState<ChannelInfoType[]>([
    {
      info: channels.find((channel) => channel.accessor === "vk")!,
      enabled: false,
      active: true,
      message: "",
      buttons: [],
      keyboardType: { name: "Стандартная", accessor: "standard" },
    },
    {
      info: channels.find((channel) => channel.accessor === "wa")!,
      enabled: false,
      active: false,
      message: "",
      buttons: [],
      keyboardType: { name: "Стандартная", accessor: "standard" },
    },
    {
      info: channels.find((channel) => channel.accessor === "tg")!,
      enabled: false,
      active: false,
      message: "",
      buttons: [],
      keyboardType: { name: "Стандартная", accessor: "standard" },
    },
    {
      info: channels.find((channel) => channel.accessor === "sms")!,
      enabled: false,
      active: false,
      message: "",
      buttons: [],
      keyboardType: { name: "Стандартная", accessor: "standard" },
    },
  ]);

  const handleChannelClick = (_channel: Channel) => {
    setChannelsInfo(
      channelsInfo.map((channel) => {
        if (channel.info.accessor === _channel.accessor) {
          return { ...channel, active: true };
        }
        if (channel.active) {
          return { ...channel, active: false };
        }
        return channel;
      })
    );
  };

  const handleChannelInfoUpdate = (channelInfo: ChannelInfoType) => {
    setChannelsInfo(
      channelsInfo.map((channel) => {
        if (channel.info.accessor === channelInfo.info.accessor) {
          return channelInfo;
        }
        return channel;
      })
    );
  };

  return (
    <S.MainWrapper>
      <Aside channelsInfo={channelsInfo} onChannelClick={handleChannelClick} />
      <Content
        channelInfo={channelsInfo.find((channelInfo) => channelInfo.active)!}
        updateChannelInfo={handleChannelInfoUpdate}
      />
    </S.MainWrapper>
  );
};

export default Main;
