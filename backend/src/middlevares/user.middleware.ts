import { NextFunction, Request, Response } from 'express';
import { passwordHelper } from '../helpers';

export const userMiddleware = {
  normalizeUserBody: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { password } = req.body;
      req.body.password = await passwordHelper.hashPassword(password);
      next();
    } catch (e) {
      next(e);
    }
  }
};
