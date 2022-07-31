import React from "react";
import { useRouter } from "next/router";

import { Api } from "@api/index";
import { NewUserContext } from "@contexts/NewUserContext";
import * as S from "@styles/styled";
import ModalChannelCard from "./ModalChannelCard";

import channels from "../../public/Channels";
import { Channel } from "@types";
const ChannelInput = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const router = useRouter();

  const userData = React.useContext(NewUserContext);
  const [activeChannels, setActiveChannels] = React.useState<Channel[]>([]);

  const handleChannelClick = (channel: Channel) => {
    if (activeChannels.includes(channel)) {
      setActiveChannels(activeChannels.filter((el) => channel.id !== el.id));
    } else {
      setActiveChannels(activeChannels.concat(activeChannels, [channel]));
    }
  };

  const handleNextBtnClick = async () => {
    setLoading(true);
    try {
      await Api().addUser({ name: userData.name, channels: activeChannels });
    } catch (error) {
      console.log(error);
    }

    router.push(`${userData.name}`);
    setLoading(false);
  };

  return (
    <>
      <S.ModalTitle>Выберите каналы отправки сообщений</S.ModalTitle>
      <S.ModalChannelChoice>
        {channels &&
          channels.map((channel) => (
            <ModalChannelCard
              key={channel.id}
              channel={channel}
              active={activeChannels.includes(channel)}
              onClick={handleChannelClick}
            />
          ))}
      </S.ModalChannelChoice>
      <S.Button
        disabled={activeChannels.length === 0 || isLoading}
        onClick={handleNextBtnClick}
      >
        Далее
      </S.Button>
    </>
  );
};

export default ChannelInput;
