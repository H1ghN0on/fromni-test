import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { ChannelApi, UserApi } from "./apis";

export const Api = (ctx?: GetServerSidePropsContext) => {
  const instance = axios.create({
    baseURL: "http://localhost:3001",
  });

  return {
    ...UserApi(instance),
    ...ChannelApi(instance),
  };
};
