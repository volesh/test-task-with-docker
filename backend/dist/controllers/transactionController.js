"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = void 0;
const reposetories_1 = require("../reposetories");
const transactionsHelper_1 = require("../helpers/transactionsHelper");
const errors_1 = require("../errors");
exports.transactionController = {
    createTransaction: async (req, res, next) => {
        try {
            const transactionInfo = req.body;
            if (!transactionInfo.status) {
                if (!await transactionsHelper_1.transactionsHelper.isUserHaveSuchTokens(transactionInfo)) {
                    throw new errors_1.CustomError(400, 'User don`t have such tokens');
                }
            }
            const transaction = await reposetories_1.transactionRepository.createTransaction({ ...transactionInfo, _user_id: req.params.id });
            res.json({ transaction });
        }
        catch (e) {
            next(e);
        }
    }
};
//# sourceMappingURL=transactionController.js.map