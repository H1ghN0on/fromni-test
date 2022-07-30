import type { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { Api } from "../api";
import Main, { ChannelSettingsType } from "../components/Main";
import { Channel } from "../contexts/NewUserContext";

interface HomeProps {
  channels: ChannelSettingsType[];
}

const Home: NextPage<HomeProps> = ({ channels }) => {
  return <Main _channels={channels} />;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const res = await Api().getUser(ctx.query.name as string);

  if (!res) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { channels: res } };
};

export default Home;
