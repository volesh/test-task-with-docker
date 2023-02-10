"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionMiddleware = void 0;
const validators_1 = require("../validators");
exports.transactionMiddleware = {
    isTransactionValid: async (req, res, next) => {
        try {
            const transaction = req.body;
            const validate = validators_1.transactionValidator.neTransactionValidator.validate(transaction);
            if (validate.error) {
                throw new Error('Transaction not valid');
            }
            req.body = validate.value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
};
//# sourceMappingURL=transactionMiddleware.js.map