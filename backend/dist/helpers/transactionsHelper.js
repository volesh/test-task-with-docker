"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsHelper = void 0;
const reposetories_1 = require("../reposetories");
exports.transactionsHelper = {
    isUserHaveSuchTokens: async (transaction) => {
        let tokensValue = 0;
        const transactions = await reposetories_1.transactionRepository.getTransactionsBySearchParams({ tokenId: transaction.tokenId });
        transactions.forEach((elem) => {
            if (+elem.date <= +transaction.date) {
                if (elem.status) {
                    tokensValue += elem.count;
                }
                else if (!elem.status) {
                    tokensValue -= elem.count;
                }
            }
        });
        console.log(tokensValue);
        console.log(transaction.count);
        if (tokensValue < transaction.count)
            return false;
        return true;
    }
};
//# sourceMappingURL=transactionsHelper.js.map