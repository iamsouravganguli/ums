import { Router } from 'express';
import { signin_controller } from '../../controllers/user/signin.controller.js';
import { UserMiddleware } from '../../middlewares/user/user.middleware.js';
import { validateRequest } from 'zod-express-middleware';
import { SigninValidation } from '../../validations/user/signin.validation.js';
export const signin_route = Router().post('/signin', [
    validateRequest(SigninValidation),
    signin_controller,
    UserMiddleware,
]);
