import { Channel } from "@types";
import React from "react";

type Props = {
  children: React.ReactNode;
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
