import { Message } from "discord.js";
import provider from "../discord.provider";

const repeatMessage = (message: Message, content: string) => {
  provider?.send(message, content);
};

export default repeatMessage;
