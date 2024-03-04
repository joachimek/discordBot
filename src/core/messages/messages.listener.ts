import { Client, Message } from "discord.js";

const messageListener = async (client: Client) => {
  console.log("message listener started")

  client.on("messageCreate", async (message: Message) => {
    const { content } = message
    if(content.includes("huj"))
      message.channel.send("kutas")
    if(content.split(" ")[0] === "chinol") {
      const [prefix, command, sufix] = content.split(" ")
    }
  })
}

export default messageListener