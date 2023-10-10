import { Router } from 'express';
import { signin_route } from './user/signin.route.js';
import { signup_route } from './user/signup.route.js';
import { profile_route } from './user/profile.route.js';
import { refresh_route } from './user/refresh.route.js';
export const Routes = {
  authentication: Router().use([signin_route, signup_route]),
  refresh: Router().use(refresh_route),
  profile: Router().use(profile_route),
};
