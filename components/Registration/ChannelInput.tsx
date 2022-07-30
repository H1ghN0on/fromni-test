import { useRouter } from "next/router";
import React from "react";
import { Api } from "../../api";
import { Channel, NewUserContext } from "../../contexts/NewUserContext";
import channels from "../../public/Channels";
import * as S from "../../styles/styled";
import ModalChannelCard from "./ModalChannelCard";
const ChannelInput = () => {
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
    try {
    } catch (error) {
      console.log(error);
    }
    await Api().addUser({ name: userData.name, channels: activeChannels });
    router.push(`${userData.name}`);
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
        disabled={activeChannels.length === 0}
        onClick={handleNextBtnClick}
      >
        Далее
      </S.Button>
    </>
  );
};

export default ChannelInput;
