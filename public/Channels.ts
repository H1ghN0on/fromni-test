import { Channel } from "../contexts/NewUserContext";
import { FaVk, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdSms } from "react-icons/md";

const channels: Channel[] = [
  {
    id: 1,
    name: "VKontakte",
    accessor: "vk",
    icon: FaVk,
    color: "#0077FF",
    message: { limit: 4096 },
    keyboard: {
      support: true,
      standard: {
        limit: 40,
        urlSupport: true,
      },
      inline: {
        limit: 10,
        urlSupport: true,
      },
    },
  },
  {
    id: 2,
    name: "WhatsApp",
    accessor: "wa",
    icon: FaWhatsapp,
    color: "#25D366",
    message: { limit: 1000 },
    keyboard: {
      support: true,
      standard: {
        limit: 10,
        lengthLimit: 20,
        urlSupport: false,
      },
      inline: {
        limit: 3,
        lengthLimit: 20,
        urlSupport: true,
        urlLimit: 1,
      },
    },
  },
  {
    id: 3,
    name: "Telegram",
    accessor: "tg",
    icon: FaTelegramPlane,
    color: "#2AABEE",
    message: { limit: 4096 },
    keyboard: {
      support: true,
      standard: {
        urlSupport: false,
      },
      inline: {
        lengthLimit: 64,
        urlSupport: true,
      },
    },
  },
  {
    id: 4,
    name: "SMS",
    accessor: "sms",
    icon: MdSms,
    color: "#9999ff",
    message: {},
    keyboard: {
      support: false,
    },
  },
];

export default channels;
