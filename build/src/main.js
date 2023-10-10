import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { database_init } from './database/config/db.config.js';
import { Routes } from './routes/index.js';
import { AuthorizationMiddleware } from './middlewares/authorization/authorization.middleware.js';
import { GlobaMiddleware } from './middlewares/global/globa.middleware.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Routes.authentication);
app.use(AuthorizationMiddleware);
app.use([Routes.profile, Routes.refresh]);
app.use(GlobaMiddleware);
app.listen(8000, () => {
    database_init;
    console.log('🚀 Server Working...');
});
