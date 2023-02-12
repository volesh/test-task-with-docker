import { IUser } from '../interfaces';
import { userDb } from '../models';

export const userRepository = {
  createUser: async (data: IUser): Promise<IUser> => {
    return userDb.create(data);
  },
};
