"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_parser_1 = __importDefault(require("./messages.parser"));
const message_command_mapper_1 = __importDefault(require("./message-command.mapper"));
const repeat_action_1 = __importDefault(require("../core/actions/repeat.action"));
const messageListener = (client) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("message listener started");
    client.on("messageCreate", (message) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { author, content } = message;
        if (!author.bot && (content === null || content === void 0 ? void 0 : content[0]) === ">") {
            const [command, props] = (0, messages_parser_1.default)(content);
            if ((_a = Object === null || Object === void 0 ? void 0 : Object.keys(message_command_mapper_1.default)) === null || _a === void 0 ? void 0 : _a.includes(command)) {
                const action = message_command_mapper_1.default === null || message_command_mapper_1.default === void 0 ? void 0 : message_command_mapper_1.default[command];
                action(message, props);
            }
        }
        //  super serwer rzeczy
        if (!author.bot) {
            const { content } = message;
            if (!message.author.bot) {
                if (content.toLowerCase().includes("huj"))
                    (0, repeat_action_1.default)(message, "kutas");
                if (content.toLowerCase().includes("siki"))
                    (0, repeat_action_1.default)(message, "mocz");
                if (content.toLowerCase().includes("adam") || content.includes("zimny"))
                    (0, repeat_action_1.default)(message, "SUPER ZIMNY MENTIONED!!!!");
                if (content.toLowerCase().includes("policj"))
                    (0, repeat_action_1.default)(message, "jebać policję chuju");
            }
        }
    }));
});
exports.default = messageListener;
