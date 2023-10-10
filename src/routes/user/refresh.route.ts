import { Router } from 'express';
import { refresh_controller } from '../../controllers/user/refresh.controller.js';
import { validateRequest } from 'zod-express-middleware';
import { RefreshValidation } from '../../validations/user/refresh.validation.js';

export const refresh_route = Router().post('/refresh', [
  validateRequest(RefreshValidation),
  refresh_controller,
]);
