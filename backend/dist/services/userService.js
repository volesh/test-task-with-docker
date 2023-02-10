"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
exports.userService = {
    calculateCurrentValue: (listOfUsersCoins, coinMarkets) => {
        let currentValue = 0;
        const newList = listOfUsersCoins.map((coin) => {
            const coinMarket = coinMarkets.find((market) => market.id === coin.tokenId);
            const currentCoinValue = coin.count * coinMarket.current_price;
            currentValue += currentCoinValue;
            const newCoin = { ...coin, currentValue: currentCoinValue };
            return newCoin;
        });
        return { newList, currentValue };
    }
};
//# sourceMappingURL=userService.js.map