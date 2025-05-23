import express, { Express } from 'express';
import handleError from '../middlewares/error.midleware';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const apiVersion = process.env.API_VERSION || 'v1';

const routes = (app: Express) => {
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ message: 'MS Auth is alive!' });
  });

  app.use(`/${apiVersion}`, userRoutes, authRoutes);

  app.use(handleError);
};

export default routes;
