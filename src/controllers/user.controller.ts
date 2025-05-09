import { NextFunction, Request, Response } from 'express';
import { Schema } from 'mongoose';

import { UserService } from '../services/user.service';

import { createUserSchema } from '../schemas/user.schema';

import ValidationError from '../errors/validation.error';
import { Logger } from '../config/logger.config';
import BadRequestError from '../errors/badRequest.error';

const logger = new Logger('UserController');

/**
 * Controller responsável por gerenciar as rotas relacionadas aos usuários.
 * Opera como intermediário entre as requisições HTTP e os métodos de serviço.
 */
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * Cria um novo usuário com os dados fornecidos no corpo da requisição.
   *
   * @param req - Objeto da requisição Express contendo os dados do usuário.
   * @param res - Objeto da resposta Express.
   * @param next - Função para passar o controle ao próximo middleware em caso de erro.
   */
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req.body;

      const { error } = createUserSchema.validate(userData);

      if (error) {
        throw new ValidationError(error);
      }

      const created = await this.userService.create(userData);
      res.status(201).json({ data: created });
    } catch (error) {
      logger.error(`create error: ${error}`);
      next(error);
    }
  }

  /**
   * Retorna todos os usuários cadastrados.
   *
   * @param req - Objeto da requisição Express.
   * @param res - Objeto da resposta Express.
   * @param next - Função para passar o controle ao próximo middleware em caso de erro.
   */
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.get();

      res.status(200).json({ data: users });
    } catch (error) {
      logger.error(`get error: ${error}`);
      next(error);
    }
  }

  /**
   * Retorna um usuário específico pelo seu ID.
   *
   * @param req - Objeto da requisição Express contendo o parâmetro `id`.
   * @param res - Objeto da resposta Express.
   * @param next - Função para passar o controle ao próximo middleware em caso de erro.
   */
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = new Schema.Types.ObjectId(req.params.id);

      if (!id) {
        throw new BadRequestError('The following is missing: id');
      }

      const user = await this.userService.getById(id);
      res.status(200).json({ data: user });
    } catch (error) {
      logger.error(`get by id error: ${error}`);
      next(error);
    }
  }

  /**
   * Atualiza os dados de um usuário com base no ID fornecido.
   *
   * @param req - Objeto da requisição Express contendo `id` e os dados a serem atualizados.
   * @param res - Objeto da resposta Express.
   * @param next - Função para passar o controle ao próximo middleware em caso de erro.
   */
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req.body;
      const id = new Schema.Types.ObjectId(req.params.id);

      if (!id) {
        throw new BadRequestError('The following is missing: id');
      }

      const { error } = createUserSchema.validate(userData);

      if (error) {
        throw new ValidationError(error);
      }

      const updated = await this.userService.update(id, userData);

      res.status(200).json({ data: updated });
    } catch (error) {
      logger.error(`update error: ${error}`);
      next(error);
    }
  }

  /**
   * Marca um usuário como inativo, registrando a data de exclusão lógica.
   *
   * @param req - Objeto da requisição Express contendo o parâmetro `id`.
   * @param res - Objeto da resposta Express.
   * @param next - Função para passar o controle ao próximo middleware em caso de erro.
   */
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = new Schema.Types.ObjectId(req.params.id);

      if (!id) {
        throw new BadRequestError('The following is missing: id');
      }
      const updated = await this.userService.delete(id);

      res.status(200).json({ data: updated });
    } catch (error) {
      logger.error(`delete error: ${error}`);
      next(error);
    }
  }
}
