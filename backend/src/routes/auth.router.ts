import express from 'express';
import { userController } from '../controllers';
import { userMiddleware } from '../middlevares';

const authRouter = express.Router();

authRouter.post('/sign-up', userMiddleware.normalizeUserBody, userController.createUser);

export { authRouter };
