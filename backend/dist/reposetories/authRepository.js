"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRepository = void 0;
const models_1 = require("../models");
exports.authRepository = {
    createAccessTokenPair: async (data) => {
        return models_1.AuthDb.create(data);
    },
    getAccessTokenPair: async (searchData) => {
        return models_1.AuthDb.findOne(searchData);
    }
};
//# sourceMappingURL=authRepository.js.map