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

export type ChannelSettingsType = {
  accessor: "vk" | "wa" | "tg" | "sms";
  enabled: boolean;
  settings: {
    keyboard: {
      type: "standard" | "inline";
      buttons: KeyboardButtonType[];
    };
    message: "";
  };
};

interface MainProps {
  _channels: ChannelSettingsType[];
}

const Main: React.FC<MainProps> = ({ _channels }) => {
  const [channelsInfo, setChannelsInfo] = React.useState<ChannelInfoType[]>(
    _channels.map((channel) => ({
      info: channels.find(
        (_channel) => channel.accessor === _channel.accessor
      )!,
      enabled: channel.enabled,
      active: false,
      message: channel.settings.message,
      buttons: channel.settings.keyboard.buttons,
      keyboardType: (() => {
        if (channel.settings.keyboard.type === "standard") {
          return {
            name: "Стандартная",
            accessor: "standard",
          };
        } else if (channel.settings.keyboard.type === "inline") {
          return {
            name: "Inline",
            accessor: "inline",
          };
        } else {
          return {
            name: "Стандартная",
            accessor: "standard",
          };
        }
      })(),
    }))
  );

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
