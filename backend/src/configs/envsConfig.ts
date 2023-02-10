import { config } from "dotenv";

config();

export const envConfig = {
  PORT: process.env.PORT,
  ACCESS_KEY_WORD: process.env.ACCESS_KEY_WORD || "access_secret_key_word",
  REFRESH_KEY_WORD: process.env.REFRESH_KEY_WORD || "refresh_secret_key_word",
};
