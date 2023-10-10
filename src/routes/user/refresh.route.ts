import { Router } from 'express';
import { refresh_controller } from '../../controllers/user/refresh.controller.js';

export const refresh_route = Router().post('/refresh', [refresh_controller]);
