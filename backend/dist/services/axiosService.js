"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const configs_1 = require("../configs");
const axiosService = axios_1.default.create({ baseURL: configs_1.envConfig.AXIOS_BASE_URL });
exports.axiosRequest = {
    getCoinsPrices: (coins) => axiosService.get(`&ids=${coins}`)
};
//# sourceMappingURL=axiosService.js.map