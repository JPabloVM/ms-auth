import { IUser } from '../models/user.model';

export type CreateUserDTO = Omit<IUser, '_id' | 'createdAt' | 'updatedAt'>;

export type UpdateUserDTO = Partial<Omit<IUser, '_id' | 'createdAt' | 'updatedAt'>>;
