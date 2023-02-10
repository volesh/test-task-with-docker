"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinsService = void 0;
const axiosService_1 = require("./axiosService");
exports.coinsService = {
    getCoinMarketsByTransactions: async (transactions) => {
        const listOfTokens = [];
        transactions.forEach((elem) => {
            if (!listOfTokens.includes(elem.tokenId)) {
                listOfTokens.push(elem.tokenId);
            }
        });
        const requestString = listOfTokens.join('%2C%20');
        return axiosService_1.axiosRequest.getCoinsPrices(requestString);
    }
};
//# sourceMappingURL=coinsService.js.map