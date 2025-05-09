import Joi from 'joi';
import { CreateUserDTO, UpdateUserDTO } from '../types/user.types';

export const createUserSchema = Joi.object<CreateUserDTO>({
  status: Joi.boolean().default(true),
  name: Joi.string().trim().required().messages({
    'any.required': 'O nome é obrigatório.',
    'string.empty': 'O nome não pode estar vazio.',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'O e-mail é obrigatório.',
    'string.email': 'O e-mail deve ser válido.',
    'string.empty': 'O e-mail não pode estar vazio.',
  }),
  pass: Joi.string().min(6).required().messages({
    'any.required': 'A senha é obrigatória.',
    'string.min': 'A senha deve ter pelo menos 6 caracteres.',
    'string.empty': 'A senha não pode estar vazia.',
  }),
  deletedAt: Joi.date().optional(),
});

export const updateUserSchema = Joi.object<UpdateUserDTO>({
  status: Joi.boolean().optional(),
  name: Joi.string().trim().optional(),
  email: Joi.string().email().optional(),
  pass: Joi.string().min(6).optional(),
  deletedAt: Joi.date().optional(),
}).min(1); // Garante que ao menos um campo seja informado
