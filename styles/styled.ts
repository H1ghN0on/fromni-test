import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #c78b9e 0%, #1d2671 100%);
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 50px 80px;
  border-radius: 15px;
`;

export const ModalTitle = styled.h1`
  font-size: 2em;
  font-weight: normal;
  text-align: center;
`;

export const InputBox = styled.div`
  margin-top: 50px;
`;

export const InputLabel = styled.h4`
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 30vw;
  font-size: 1.5em;
  padding: 20px 10px;
  outline: none;
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 30%;
  align-self: center;
  border: none;
  background: #c78b9e;
  color: white;
  padding: 20px 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  transition: background 0.2s;
  &:disabled {
    background: grey;
  }
`;

export const ModalChannelChoice = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

interface ModalChannelCardProps {
  active: Boolean;
}

export const ModalChannelCard = styled.div<ModalChannelCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: box-shadow 0.1s;
  box-shadow: ${(props) =>
    props.active ? "0px 0px 8px 0px rgba(29, 64, 92, 1)" : "none"};
  border-radius: 20px;
  width: 120px;
  cursor: pointer;
`;

export const ModalChannelIcon = styled.div`
  font-size: 40px;
`;

export const ModalChannelCardName = styled.h3`
  font-size: 1em;
  font-weight: bold;
`;

export const MainAside = styled.aside`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 15vw;
`;

export const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface ChannelProps {
  active: Boolean;
  background: string;
}

export const Channel = styled.div<ChannelProps>`
  cursor: pointer;
  box-shadow: 2px 0px 8px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => (props.active ? props.background : "none")};
  color: ${(props) => (props.active ? "white" : "inherit")};
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  transition: background 0.1s, color 0.1s;
  &:first-child {
    margin-top: 0;
  }
`;

export const ChannelName = styled.span`
  font-size: 1em;
`;

export const ChannelAvatar = styled.div`
  margin-right: 10px;
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
