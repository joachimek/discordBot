"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser = (content) => {
    var _a;
    let command = "";
    let props = "";
    if (((_a = content === null || content === void 0 ? void 0 : content.split(" ")) === null || _a === void 0 ? void 0 : _a.length) > 1) {
        [command, props] = [
            content === null || content === void 0 ? void 0 : content.slice(1, content === null || content === void 0 ? void 0 : content.indexOf(" ")),
            content === null || content === void 0 ? void 0 : content.slice((content === null || content === void 0 ? void 0 : content.indexOf(" ")) + 1),
        ];
    }
    else {
        command = content === null || content === void 0 ? void 0 : content.slice(1);
    }
    return [command, props];
};
exports.default = parser;
