"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDb = void 0;
const mongoose_1 = require("mongoose");
const authSchema = new mongoose_1.Schema({
    _user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
}, { timestamps: true });
const AuthDb = (0, mongoose_1.model)('Auth', authSchema);
exports.AuthDb = AuthDb;
//# sourceMappingURL=authModel.js.map