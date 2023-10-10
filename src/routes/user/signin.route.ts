import { Router } from 'express';
import { signin_controller } from '../../controllers/user/signin.controller.js';
import { UserMiddleware } from '../../middlewares/user/user.middleware.js';

export const signin_route = Router().post('/signin', [
  signin_controller,
  UserMiddleware,
]);
