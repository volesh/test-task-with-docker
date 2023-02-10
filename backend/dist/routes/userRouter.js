"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlevares_1 = require("../middlevares");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post('/', middlevares_1.userMiddleware.isNewUserValid, controllers_1.userController.createUser);
userRouter.get('/:id', middlevares_1.userMiddleware.isUserIdValid, middlevares_1.authMiddleware.isAccessTokenValid, middlevares_1.userMiddleware.isUserExist('id', 'params', '_id'), middlevares_1.userMiddleware.aggregateUser, middlevares_1.userMiddleware.createUsersCoins, controllers_1.userController.getUser);
userRouter.patch('/:id/changePass', middlevares_1.userMiddleware.isUserIdValid, middlevares_1.authMiddleware.isAccessTokenValid, middlevares_1.userMiddleware.isUserExist('id', 'params', '_id'), controllers_1.userController.changePass);
//# sourceMappingURL=userRouter.js.map