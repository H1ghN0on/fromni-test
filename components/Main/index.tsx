import React from "react";
import { Channel } from "../../contexts/NewUserContext";
import Aside from "./Aside";

const Main = () => {
  const [activeChannel, setActiveChannel] = React.useState<Channel | null>(
    null
  );

  const handleChannelClick = (channel: Channel) => {
    setActiveChannel(channel);
  };

  return (
    <Aside activeChannel={activeChannel} onChannelClick={handleChannelClick} />
  );
};

export default Main;
