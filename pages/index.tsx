import type { NextPage } from "next";
import Registration from "../components/Registration";
import { NewUserContextProvider } from "../contexts/NewUserContext";

const RegistrationPage: NextPage = () => {
  return (
    <NewUserContextProvider>
      <Registration />
    </NewUserContextProvider>
  );
};

export default RegistrationPage;
