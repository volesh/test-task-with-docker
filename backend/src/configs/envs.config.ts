import { config } from 'dotenv';

config();

export const envConfig = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  MONGO_SERVER: process.env.MONGO_SERVER || 'mongodb://127.0.0.1:27017/testTask',
};
