"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexpEnum = void 0;
exports.regexpEnum = {
    PASSWORD: /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/,
    EMAIL: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
};
//# sourceMappingURL=regexpEnum.js.map