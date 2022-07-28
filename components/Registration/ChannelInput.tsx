import React from "react";
import { Channel, NewUserContext } from "../../contexts/NewUserContext";
import channels from "../../public/Channels";
import * as S from "../../styles/styled";
import ModalChannelCard from "./ModalChannelCard";
const ChannelInput = () => {
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
    //send to backend
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
      <S.Button disabled={activeChannels.length === 0}>Далее</S.Button>
    </>
  );
};

export default ChannelInput;
