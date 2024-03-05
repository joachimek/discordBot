import { Client, GatewayIntentBits } from "discord.js";

const constructor = (intents?: GatewayIntentBits[]) => {
  const client = new Client({
    intents: [...defaultIntents, ...(intents || [])],
  });
  console.log("discord client created successfully");
  return client;
};

const defaultIntents = [
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildVoiceStates,
];

export default constructor;
