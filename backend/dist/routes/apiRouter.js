"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
// import {userRouter, transactionRouter, authRouter } from './index';
const userRouter_1 = require("./userRouter");
const transactionRouter_1 = require("./transactionRouter");
const authRouter_1 = require("./authRouter");
const apiRouter = express_1.default.Router();
exports.apiRouter = apiRouter;
apiRouter.use('/users', userRouter_1.userRouter);
apiRouter.use('/transactions', transactionRouter_1.transactionRouter);
apiRouter.use('/auth', authRouter_1.authRouter);
//# sourceMappingURL=apiRouter.js.map