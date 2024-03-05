"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const messages_listener_1 = __importDefault(
  require("./main/messages.listener"),
);
const env_configurer_1 = __importDefault(require("./core/env.configurer"));
const client_constructor_1 = __importDefault(
  require("./core/client.constructor"),
);
const discord_provider_1 = __importDefault(require("./core/discord.provider"));
//  configuring .env
(0, env_configurer_1.default)();
//  creating discord.js client
const client = (0, client_constructor_1.default)();
//  logging into discord
discord_provider_1.default.login(client);
//  starting listener
(0, messages_listener_1.default)(client);
