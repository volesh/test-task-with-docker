"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlevares_1 = require("../middlevares");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.post('/login', middlevares_1.userMiddleware.isUserExist('email'), middlevares_1.authMiddleware.isLoginValid, controllers_1.authController.login);
authRouter.post('/refresh', middlevares_1.authMiddleware.isRefreshValid, controllers_1.authController.refresh);
//# sourceMappingURL=authRouter.js.map