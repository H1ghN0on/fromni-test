import React from "react";

import Aside from "@components/Main/Aside";
import Content from "@components/Main/Content";
import * as S from "@styles/styled";
import channels from "../../public/Channels";
import { Channel, ChannelInfoType, ChannelSettingsType } from "@types";

interface MainProps {
  _channels: ChannelSettingsType[];
}

const Main: React.FC<MainProps> = ({ _channels }) => {
  const [channelsInfo, setChannelsInfo] = React.useState<ChannelInfoType[]>(
    _channels.map((channel) => ({
      unsaved: false,
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

  const getActiveChannel = () => {
    return channelsInfo.find((channelInfo) => channelInfo.active)!;
  };
  return (
    <S.MainWrapper>
      <Aside channelsInfo={channelsInfo} onChannelClick={handleChannelClick} />
      <Content
        channelInfo={(() => {
          return getActiveChannel();
        })()}
        updateChannelInfo={handleChannelInfoUpdate}
      />
    </S.MainWrapper>
  );
};

export default Main;
