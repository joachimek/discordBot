import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import messageListener from "./core/messages/messages.listener";

//  configuring .env
config();
console.log(".env configured")

//  creating discord.js client
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});
console.log("discord client created successfully")

//  logging into discord
client.login(process.env.DISCORD_TOKEN);
console.log("discord login successful")

//  starting listener
messageListener(client)
