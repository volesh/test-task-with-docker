"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(status, msg) {
        super(msg);
        this.name = 'Controller Error';
        this.message = msg;
        this.status = status;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=customError.js.map