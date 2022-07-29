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

export const MainContent = styled.main`
  width: 80vw;
  padding: 50px 100px;

  &:first-child {
    margin-top: 0;
  }

  & > div {
    margin-top: 15px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  font-weight: normal;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageInput = styled.textarea`
  resize: vertical;
  outline: none;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 0.7em;
  min-height: 100px;
  max-height: 300px;
  padding: 5px;
`;

export const MessageLabel = styled.span`
  font-size: 0.8em;
  margin-bottom: 2px;
`;

export const MessageSizeLabel = styled.span`
  font-size: 1em;

  margin-top: 10px;
  align-self: end;
  border: 2px solid #52a1e1;
  padding: 5px;
  border-radius: 10px;
`;

interface DroppableIconProps {
  active: Boolean;
}

export const DroppableOption = styled.div``;

export const DroppableButton = styled.h3`
  background: #52a1e1;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DroppableContent = styled.h3`
  margin-top: 10px;
  padding: 0 10px;
`;

export const DroppableTitle = styled.h3``;
export const DroppableIcon = styled.div<DroppableIconProps>`
  font-size: 1.5em;
  transform: ${(props) => props.active && "rotate(540deg)"};
  transition: transform 0.5s;
`;

export const KeyboardName = styled.span``;

export const KeyboardChoice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 10px;
  }
`;

export const Switch = styled.input`
  cursor: pointer;
  position: relative;
  width: 70px;
  height: 30px;
  -webkit-appearance: none;
  background: #fff;
  border-radius: 20px;
  outline: none;
  box-shadow: inset 0 0 5px rgba (0, 0, 0, 0.2);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -webkit-box-shadow: 0px 0px 9px 0px #52a1e1;
  -moz-box-shadow: 0px 0px 9px 0px #52a1e1;
  box-shadow: 0px 0px 9px 0px #52a1e1;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 5px;
    left: 5px;
    background: #52a1e1;
    transition: 0.5s;
    transform: scale(1.1);
    box-shadow: 0 0px 5px #52a1e1;
  }
  &:checked:before {
    left: 43px;
  }
`;

export const KeyboardButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KeyboardButtonAdd = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: #52a1e1;
  padding-right: 5px;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const KeyboardDropdown = styled.div`
  width: 10%;
  font-size: 15px;
  height: 100%;
`;

export const KeyboardButtonInputWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin-right: 20px;
`;

export const KeyboardButtonInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: 4px solid #52a1e1;
  border-radius: 15px;
  margin: 0 10px;
  padding-left: 10px;
  padding-right: 70px;
  font-size: 0.9em;
`;

export const KeyboardButtonInputSize = styled.div`
  position: absolute;
  right: 15px;
  top: 30%;
  display: flex;
  font-size: 0.7em;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const Dropdown = styled.div`
  width: 100%;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  background: white;
  padding: 1em;
  height: 100%;
  background: #52a1e1;
  color: white;
  border: none;
`;

export const DropdownActiveName = styled.div``;
export const DropdownIcon = styled.div`
  margin-left: auto;
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid blue;
  padding: 1em;
  border-top: none;
  background: white;
  list-style-type: none;
  & > * {
    margin-top: 3px;
  }
  &:first-child {
    margin-top: 0;
  }
`;

export const KeyboardButtonTools = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 0.9em;
  & > div {
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const KeyboardButtonTool = styled.div`
  color: white;
`;

export const KeyboardButton = styled.div`
  display: flex;
  height: 45px;
  background: #52a1e1;
  border-radius: 30px;
  padding: 15px;
  align-items: center;
  & > div {
    padding: 0 10px;
    border-right: 2px solid white;
    &:last-child {
      padding-right: 0;
      padding-left: 15px;
      border: none;
    }
  }
`;

export const KeyboardButtonList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-top: 10px;
    margin-right: 10px;
  }
  &:first-child {
    margin-top: 0;
    margin-right: 10px;
  }
`;

export const KeyboardButtonType = styled.div`
  font-size: 0.8em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-right: 2px solid white;
  padding-right: 10px;
  font-weight: bold;
`;

export const KeyboardButtonText = styled.div`
  height: 100%;
  outline: none;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  color: white;
`;

interface KeyboardButtonSizeProps {
  error: Boolean;
}

export const KeyboardButtonSize = styled.div<KeyboardButtonSizeProps>`
  display: flex;
  align-items: stretch;
  border: 2px solid #52a1e1;
  padding: 10px;
  border-radius: 10px;
  border-color: ${(props) => (props.error ? "red" : "#52a1e1")};
  color: ${(props) => (props.error ? "red" : "inherit")};
  transition: 0.2s;
`;

export const KeyboardButtonListWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentButton = styled.button`
  background: #52a1e1;
  color: white;
  text-align: center;
  padding: 20px 30px;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  max-width: 200px;
  border: none;
  transition: background 0.2s;
  &:disabled {
    background: grey;
  }
`;

export const ContentButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
