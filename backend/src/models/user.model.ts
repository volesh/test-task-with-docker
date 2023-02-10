import {
  Schema, model, Document, Model
} from 'mongoose';
import { IUser } from '../interfaces';

export type UserType = Document & IUser

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String, require: true, trim: true, required: true
    },
    email: {
      type: String, require: true, unique: true, trim: true, lowercase: true, required: true
    },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

export const userDb: Model<UserType> = model<UserType>('User', userSchema);
