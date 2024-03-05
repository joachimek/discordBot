"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const constructor = (intents) => {
  const client = new discord_js_1.Client({
    intents: [...defaultIntents, ...(intents || [])],
  });
  console.log("discord client created successfully");
  return client;
};
const defaultIntents = [
  discord_js_1.GatewayIntentBits.DirectMessages,
  discord_js_1.GatewayIntentBits.GuildMessages,
  discord_js_1.GatewayIntentBits.Guilds,
  discord_js_1.GatewayIntentBits.MessageContent,
  discord_js_1.GatewayIntentBits.GuildVoiceStates,
];
exports.default = constructor;
