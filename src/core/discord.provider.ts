import { joinVoiceChannel } from "@discordjs/voice";
import { Client, Message, VoiceBasedChannel } from "discord.js";

const provider = {
  login: async (client: Client) => {
    client.login(process.env.DISCORD_TOKEN);
    console.log("discord login successful");
  },
  send: async (message: Message, content: string) => {
    message.channel.send(content);
  },
  join: async (
    channelId: string,
    guildId: string,
    channel: VoiceBasedChannel,
  ) => {
    console.log("not implemented");
  },
} as DiscordProvider;

interface DiscordProvider {
  login: (client: Client) => Promise<void>;
  send: (message: Message, content: string) => Promise<void>;
  join: (
    channelId: string,
    guildId: string,
    channel: VoiceBasedChannel,
  ) => Promise<void>;
}

export default provider;
