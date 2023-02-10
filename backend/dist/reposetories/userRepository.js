"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const models_1 = require("../models");
const userRepository = {
    getByParams: async (dbField, fieldToSearch) => {
        return models_1.UserDb.findOne({ [dbField]: fieldToSearch });
    },
    getUserWithTransactions: async (userId) => {
        return models_1.UserDb.aggregate([
            {
                $match: { _id: userId }
            },
            {
                $lookup: {
                    from: 'transactions',
                    localField: '_id',
                    foreignField: '_user_id',
                    as: 'transactions'
                }
            },
            {
                $project: {
                    password: 0, phone: 0, __v: 0, createdAt: 0, updatedAt: 0
                }
            }
        ]);
    },
    createUser: async (data) => {
        return models_1.UserDb.create(data);
    },
    updateUser: async (data, id) => {
        return models_1.UserDb.findByIdAndUpdate(id, data, { new: true });
    }
};
exports.userRepository = userRepository;
//# sourceMappingURL=userRepository.js.map