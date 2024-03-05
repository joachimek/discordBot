import { Client, Message } from "discord.js";
import messagesParser from "./messages.parser";
import commandMapper, { mapperActions } from "./message-command.mapper";
import repeatMessage from "../core/actions/repeat.action";

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

    //  super serwer rzeczy
    if (!author.bot) {
      const { content } = message
      if (!message.author.bot) {
        if (content.toLowerCase().includes("huj"))
          repeatMessage(message, "kutas")
        if (content.toLowerCase().includes("siki"))
          repeatMessage(message, "mocz")
        if (content.toLowerCase().includes("adam") || content.includes("zimny"))
          repeatMessage(message, "SUPER ZIMNY MENTIONED!!!!")
        if (content.toLowerCase().includes("policj"))
          repeatMessage(message, "jebać policję chuju")
      }
    }
  });
};

export default messageListener;
