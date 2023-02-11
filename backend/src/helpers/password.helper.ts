import * as argon2 from 'argon2';
import { createHmac } from 'crypto';

export const passwordHelper = {
  hashPassword: async (password: string): Promise<string> => {
    const hashedPass = await argon2.hash(password);
    return createHmac('AES256-CBC', hashedPass).digest('hex');
  }
};
