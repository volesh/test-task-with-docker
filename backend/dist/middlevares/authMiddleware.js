"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const validators_1 = require("../validators");
const reposetories_1 = require("../reposetories");
const services_1 = require("../services");
const configs_1 = require("../configs");
const helpers_1 = require("../helpers");
const errors_1 = require("../errors");
exports.authMiddleware = {
    isLoginValid: async (req, res, next) => {
        try {
            const { password } = req.body;
            const user = req.user;
            const isValid = validators_1.authValidator.loginValidator.validate(req.body);
            if (isValid.error) {
                throw new Error('Invalid email or password');
            }
            // Compare passwords
            await helpers_1.passwordHelper.comparePasswords(password, user.password);
            next();
        }
        catch (e) {
            next(e);
        }
    },
    isAccessTokenValid: async (req, res, next) => {
        try {
            const accessToken = req.get('Authorization');
            const { id } = req.params;
            if (!accessToken) {
                throw new Error('No token');
            }
            const isToken = await reposetories_1.authRepository.getAccessTokenPair({ accessToken, _user_id: id });
            if (!isToken) {
                throw new Error('Wrong Token');
            }
            await services_1.authService.isTokenValid(accessToken, configs_1.envConfig.ACCESS_KEY_WORD);
            req.tokenInfo = isToken;
            next();
        }
        catch (e) {
            next(e);
        }
    },
    isRefreshValid: async (req, res, next) => {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) {
                throw new errors_1.CustomError(402, 'No Token');
            }
            const tokenPair = await reposetories_1.authRepository.getAccessTokenPair({ refreshToken });
            if (!tokenPair) {
                throw new errors_1.CustomError(401, 'Token not valid');
            }
            await services_1.authService.isTokenValid(refreshToken, configs_1.envConfig.REFRESH_KEY_WORD);
            req.tokenInfo = tokenPair;
            next();
        }
        catch (e) {
            next(e);
        }
    }
};
//# sourceMappingURL=authMiddleware.js.map