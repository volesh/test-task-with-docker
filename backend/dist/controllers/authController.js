"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const services_1 = require("../services");
const reposetories_1 = require("../reposetories");
exports.authController = {
    login: async (req, res, next) => {
        try {
            const { email } = req.body;
            const { _id } = req.user;
            const tokens = services_1.authService.generateAccessTokenPair({ email });
            const accessTokenPair = await reposetories_1.authRepository.createAccessTokenPair({
                ...tokens,
                _user_id: _id
            });
            if (!accessTokenPair && !tokens) {
                throw new Error('Something went wrong with creating tokens');
            }
            const response = {
                user: req.user,
                tokens: accessTokenPair
            };
            res.json(response);
        }
        catch (e) {
            next(e);
        }
    },
    refresh: async (req, res, next) => {
        try {
            const info = req.tokenInfo;
            const tokens = services_1.authService.generateAccessTokenPair({ email: info?._user_id });
            if (!tokens) {
                throw new Error('Something went wrong');
            }
            const newTokenPair = await reposetories_1.authRepository.createAccessTokenPair({ ...tokens, _user_id: info?._user_id });
            if (!newTokenPair) {
                throw new Error('Something went wrong');
            }
            res.json(newTokenPair);
        }
        catch (e) {
            next(e);
        }
    }
};
//# sourceMappingURL=authController.js.map