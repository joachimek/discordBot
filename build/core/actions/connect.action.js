"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_provider_1 = __importDefault(require("../discord.provider"));
const repeatMessage = (message) => {
    var _a;
    const { member, guildId } = message;
    if (!((_a = member === null || member === void 0 ? void 0 : member.voice) === null || _a === void 0 ? void 0 : _a.channelId)) {
        discord_provider_1.default.send(message, "Nie jesteś połączony z żadnym kanałem, debilu");
    }
    else {
        const { voice: { channel, channelId }, } = member;
        discord_provider_1.default.join(channelId, guildId, channel);
    }
};
exports.default = repeatMessage;
