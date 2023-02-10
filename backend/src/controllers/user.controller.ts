import { Request, Response, NextFunction } from 'express';
import { userRepository } from '../reposetories';

export const userController = {
  createUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await userRepository.createUser(req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }
};
