import { IconType } from "react-icons";

export type ChannelInfoType = {
  info: Channel;
  enabled: boolean;
  active: boolean;
  message: string;
  buttons: KeyboardButtonType[];
  keyboardType: KeyboardTypeType;
  unsaved: boolean;
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

export type KeyboardButtonType = {
  name: string;
  type: KeyboardButtonTypeType;
  id: number;
};

export type KeyboardTypeType = {
  name: string;
  accessor: string;
};

export type KeyboardButtonTypeType = {
  name: string;
  accessor: string;
};

export type Channel = {
  id: number;
  name: string;
  accessor: "vk" | "tg" | "sms" | "wa";
  icon: IconType;
  color: string;
  message: {
    limit?: number;
  };
  keyboard: {
    support: boolean;
    standard: {
      limit?: number;
      lengthLimit?: number;
      urlSupport: boolean;
      urlLimit?: number;
    };

    inline: {
      limit?: number;
      lengthLimit?: number;
      urlSupport: boolean;
      urlLimit?: number;
    };
  };
};
