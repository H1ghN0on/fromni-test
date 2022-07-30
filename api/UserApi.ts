import { AxiosInstance } from "axios";
import { Channel } from "../contexts/NewUserContext";

const UserApi = (instance: AxiosInstance) => {
  return {
    getUser: async (name: string) => {
      try {
        const { data } = await instance.get(`/get-user/${name}`);
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    addUser: async (info: { name: string; channels: Channel[] }) => {
      try {
        const { data } = await instance.post(`/add-user`, info);
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    checkNameExistence: async (name: string) => {
      try {
        const { data } = await instance.get(`/check-name/${name}`);
        return data;
      } catch (error) {
        console.log(error);
        return true;
      }
    },
  };
};

export default UserApi;
