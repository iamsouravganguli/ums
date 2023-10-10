import { Router } from 'express';
import { signup_controller } from '../../controllers/user/signup.controller.js';
import { UserMiddleware } from '../../middlewares/user/user.middleware.js';

export const signup_route = Router().post('/signup', [
  signup_controller,
  UserMiddleware,
]);
