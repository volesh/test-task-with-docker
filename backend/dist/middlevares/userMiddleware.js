"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const mongoose_1 = require("mongoose");
const reposetories_1 = require("../reposetories");
const errors_1 = require("../errors");
const configs_1 = require("../configs");
const validators_1 = require("../validators");
const usersTokenHelper_1 = require("../helpers/usersTokenHelper");
const services_1 = require("../services");
const userMiddleware = {
    isUserExist: (fieldName, findIn = 'body', dbField = fieldName) => async (req, res, next) => {
        try {
            const dataToSearch = req[findIn][fieldName];
            const user = await reposetories_1.userRepository.getByParams(dbField, dataToSearch);
            if (!user) {
                throw new errors_1.CustomError(configs_1.errorsConfig.notFound.statusCode, configs_1.errorsConfig.notFound.message);
            }
            req.user = user;
            next();
        }
        catch (e) {
            next(e);
        }
    },
    aggregateUser: async (req, res, next) => {
        try {
            const { _id: id } = req.user;
            const user = await reposetories_1.userRepository.getUserWithTransactions(id);
            if (!user && user.length === 0) {
                throw new Error('User not found');
            }
            req.user = user[0];
            next();
        }
        catch (e) {
            next(e);
        }
    },
    createUsersCoins: async (req, res, next) => {
        try {
            const transactions = req.user?.transactions;
            if (transactions) {
                const calc = 0;
                const coinsMarkets = await services_1.coinsService.getCoinMarketsByTransactions(transactions);
                if (!coinsMarkets) {
                    throw new Error('Problem with coinGeco');
                }
                const sortedTransactions = transactions.sort((a, b) => {
                    return +new Date(a.date) - +new Date(b.date);
                });
                const { coins, fixedMoney } = usersTokenHelper_1.usersTokenHelper.calculateTokenInfo(coinsMarkets.data, sortedTransactions);
                req.user.fixedIncome += fixedMoney;
                req.user.tokens = coins;
                req.user.currentVale = req.user.tokens.reduce((accumulator, currentValue) => accumulator + currentValue.currentValue, calc);
            }
            next();
        }
        catch (e) {
            next(e);
        }
    },
    isNewUserValid: async (req, res, next) => {
        try {
            const user = req.body;
            const validate = validators_1.userValidator.newUserValidator.validate(user);
            if (validate.error) {
                throw new Error('Body not valid');
            }
            req.body = validate.value;
            next();
        }
        catch (e) {
            next(e);
        }
    },
    isUserIdValid: (req, res, next) => {
        try {
            const { id } = req.params;
            const isValid = (0, mongoose_1.isObjectIdOrHexString)(id);
            if (!isValid) {
                throw new Error('User id not valid');
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
};
exports.userMiddleware = userMiddleware;
//# sourceMappingURL=userMiddleware.js.map