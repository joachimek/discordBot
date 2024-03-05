"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const discord_provider_1 = __importDefault(require("../discord.provider"));
const repeatMessage = (message, content) => {
  discord_provider_1.default === null || discord_provider_1.default === void 0
    ? void 0
    : discord_provider_1.default.send(message, content);
};
exports.default = repeatMessage;
