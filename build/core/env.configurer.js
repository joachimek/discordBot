"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const configurer = (options) => {
  (0, dotenv_1.config)(options);
  console.log(".env configured");
};
exports.default = configurer;
