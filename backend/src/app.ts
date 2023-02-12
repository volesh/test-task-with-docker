import 'reflect-metadata';

import cors from 'cors';
import express, { NextFunction, Request, Response, urlencoded } from 'express';
import mongoose from 'mongoose';

import { envConfig } from './configs';
import { apiRouter } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/api/v1', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    errorMessage: err.message || 'Unknown error',
    statusCode: err.status || 500,
  });
});

app.listen(envConfig.PORT, async (): Promise<void> => {
  try {
    console.log('Start connecting to db');
    await mongoose.connect(envConfig.MONGO_SERVER);
    console.log('Connected to db');
  } catch (e) {
    console.log(e);
  }
  console.log(`Working, port listen : ${envConfig.PORT}`);
});
