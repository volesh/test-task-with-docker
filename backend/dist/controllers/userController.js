"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const reposetories_1 = require("../reposetories");
const helpers_1 = require("../helpers");
const validators_1 = require("../validators");
exports.userController = {
    getUser: async (req, res, next) => {
        try {
            res.json(req.user);
        }
        catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const hashPass = await helpers_1.passwordHelper.hashPassword(req.body.password);
            const user = await reposetories_1.userRepository.createUser({ ...req.body, password: hashPass });
            res.json(user);
        }
        catch (e) {
            next(new Error('Користувач з таким "Email" вже існує'));
        }
    },
    changePass: async (req, res, next) => {
        try {
            const { oldPassword, newPassword } = req.body;
            const { id } = req.params;
            await helpers_1.passwordHelper.comparePasswords(oldPassword, req.user?.password);
            const isValid = validators_1.userValidator.newPasswordValidator.validate(req.body);
            if (isValid.error) {
                throw new Error('invalidBody');
            }
            const hashedNewPass = await helpers_1.passwordHelper.hashPassword(newPassword);
            const userWithNewPass = reposetories_1.userRepository.updateUser({ password: hashedNewPass }, id);
            res.json(userWithNewPass);
        }
        catch (e) {
            next(e);
        }
    }
};
//# sourceMappingURL=userController.js.map