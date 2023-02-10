"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRepository = void 0;
const models_1 = require("../models");
exports.transactionRepository = {
    createTransaction: async (body) => {
        return models_1.TransactionDb.create(body);
    },
    getTransactionsBySearchParams: async (body) => {
        return models_1.TransactionDb.find(body);
    },
};
//# sourceMappingURL=transactionRepository.js.map