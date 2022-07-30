import React from "react";
import { IconType } from "react-icons";

type Props = {
  children: React.ReactNode;
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

type Context = {
  currentFragment: number;
  name: string;
  channels: Channel[];
  setContext: React.Dispatch<React.SetStateAction<Context>>;
};

const initialContext: Context = {
  currentFragment: 0,
  name: "",
  channels: [],
  setContext: (): void => {
    throw new Error("setContext function must be overridden");
  },
};

const NewUserContext = React.createContext<Context>(initialContext);

const NewUserContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = React.useState<Context>(initialContext);

  return (
    <NewUserContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </NewUserContext.Provider>
  );
};

export { NewUserContext, NewUserContextProvider };
