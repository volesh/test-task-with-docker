"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlevares_1 = require("../middlevares");
const transactionRouter = express_1.default.Router();
exports.transactionRouter = transactionRouter;
transactionRouter.post('/:id', middlevares_1.userMiddleware.isUserIdValid, middlevares_1.transactionMiddleware.isTransactionValid, controllers_1.transactionController.createTransaction);
//# sourceMappingURL=transactionRouter.js.map