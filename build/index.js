"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
const messages_listener_1 = __importDefault(require("./core/messages/messages.listener"));
//  configuring .env
(0, dotenv_1.config)();
console.log(".env configured");
//  creating discord.js client
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.DirectMessages,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
console.log("discord client created successfully");
//  logging into discord
client.login(process.env.DISCORD_TOKEN);
console.log("discord login successful");
//  starting listener
(0, messages_listener_1.default)(client);
