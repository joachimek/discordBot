import { Message, VoiceBasedChannel } from "discord.js";
import provider from "../discord.provider";

const repeatMessage = (message: Message) => {
  const { member, guildId } = message;
  if (!member?.voice?.channelId) {
    provider.send(message, "Nie jesteś połączony z żadnym kanałem, debilu");
  } else {
    const {
      voice: { channel, channelId },
    } = member;
    provider.join(channelId, guildId as string, channel as VoiceBasedChannel);
  }
};

export default repeatMessage;
