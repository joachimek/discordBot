import messageListener from "./main/messages.listener";
import envConfigurer from "./core/env.configurer";
import clientConstructor from "./core/client.constructor";
import discordProvider from "./core/discord.provider";

//  configuring .env
envConfigurer();

//  creating discord.js client
const client = clientConstructor();

//  logging into discord
discordProvider.login(client);

//  starting listener
messageListener(client);
