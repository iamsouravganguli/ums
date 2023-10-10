import 'reflect-metadata';
import 'dotenv/config';
import express, { Express } from 'express';
import { database_init } from './database/config/db.config.js';
import { Routes } from './routes/index.js';
import { AuthorizationMiddleware } from './middlewares/authorization/authorization.middleware.js';
import { GlobaMiddleware } from './middlewares/global/globa.middleware.js';

//Express lib init.
const app: Express = express();

//Request json body middleware init.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Routes.authentication);
app.use(AuthorizationMiddleware);
app.use([Routes.profile, Routes.refresh]);
app.use(GlobaMiddleware);
//Single thread server init.
app.listen(8000, () => {
  //database init
  database_init;
  console.log('🚀 Server Working...');
});
