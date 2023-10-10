import { Router } from 'express';
import { signup_controller } from '../../controllers/user/signup.controller.js';
import { UserMiddleware } from '../../middlewares/user/user.middleware.js';
import { validateRequest } from 'zod-express-middleware';
import { SignupValidation } from '../../validations/user/signup.validation.js';

export const signup_route = Router().post('/signup', [
  validateRequest(SignupValidation),
  signup_controller,
  UserMiddleware,
]);
