import { Message } from "discord.js";
import repeatMessage from "../core/actions/repeat.action";

const mapper = {
  repeat: repeatMessage,
} as mapperActions;

export interface mapperActions {
  repeat: (message: Message, content: string) => void;
}

export default mapper;
