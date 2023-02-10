"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDb = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    _user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    tokenId: { type: String, required: true },
    date: { type: Date, required: true },
    count: { type: Number, required: true },
    price: { type: Number, required: true },
    status: Boolean
}, { timestamps: true });
const TransactionDb = (0, mongoose_1.model)('Transaction', transactionSchema);
exports.TransactionDb = TransactionDb;
//# sourceMappingURL=transactionModel.js.map