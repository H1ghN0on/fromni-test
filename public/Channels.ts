import { Channel } from "../contexts/NewUserContext";
import { FaVk, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdSms } from "react-icons/md";

const channels: Channel[] = [
  { id: 1, name: "VKontakte", accessor: "vk", icon: FaVk },
  { id: 2, name: "WhatsApp", accessor: "wa", icon: FaWhatsapp },
  { id: 3, name: "Telegram", accessor: "tg", icon: FaTelegramPlane },
  { id: 4, name: "SMS", accessor: "sms", icon: MdSms },
];

export default channels;
