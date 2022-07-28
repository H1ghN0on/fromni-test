import { Channel } from "../contexts/NewUserContext";
import { FaVk, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdSms } from "react-icons/md";

const channels: Channel[] = [
  { id: 1, name: "VKontakte", accessor: "vk", icon: FaVk, color: "#0077FF" },
  {
    id: 2,
    name: "WhatsApp",
    accessor: "wa",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    id: 3,
    name: "Telegram",
    accessor: "tg",
    icon: FaTelegramPlane,
    color: "#2AABEE",
  },
  { id: 4, name: "SMS", accessor: "sms", icon: MdSms, color: "#9999ff" },
];

export default channels;
