import { Router } from 'express';
import { profile_controller } from '../../controllers/user/profile.controller.js';
export const profile_route = Router().get('/profile', [profile_controller]);
