import { AxiosInstance } from "axios";

const ChannelApi = (instance: AxiosInstance) => {
  return {
    updateChannel: async (info: { name: string; channelInfo: any }) => {
      try {
        const { data } = await instance.post(`/update-channel`, info);
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    enableChannel: async (info: {
      name: string;
      channel: "vk" | "tg" | "wa" | "sms";
      enabled: boolean;
    }) => {
      try {
        const { data } = await instance.post(`/enable-channel`, info);
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  };
};

export default ChannelApi;
