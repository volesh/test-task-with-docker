"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDb = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../constants");
const userSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    email: {
        type: String,
        regex: constants_1.regexpEnum.EMAIL,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        regex: constants_1.regexpEnum.PASSWORD,
        required: true,
        trim: true
    },
    fixedIncome: { type: Number, default: 0 },
    invested: Number
}, { timestamps: true });
const UserDb = (0, mongoose_1.model)('User', userSchema);
exports.UserDb = UserDb;
//# sourceMappingURL=userModel.js.map