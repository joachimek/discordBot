import { Client, Message } from "discord.js";
import messagesParser from "./messages.parser";
import commandMapper, { mapperActions } from "./message-command.mapper";

const messageListener = async (client: Client) => {
  console.log("message listener started");

  client.on("messageCreate", async (message: Message) => {
    const { author, content } = message;
    if (!author.bot && content?.[0] === ">") {
      const [command, props] = messagesParser(content);
      if (Object?.keys(commandMapper)?.includes(command)) {
        const action = commandMapper?.[command as keyof mapperActions];
        action(message, props);
      }
    }
  });
};

export default messageListener;
