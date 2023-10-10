import { Request } from 'express';
import { User } from '../../database/models/user.model.js';
import bcrypt from 'bcrypt';
import { JWT } from '../../helpers/jwt/jwt.js';

export const AuthUserService = async (req: Request) => {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (!existingUser) {
      return Promise.reject({
        code: 100,
        status: false,
        message: 'User does not exist',
      });
    } else {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        existingUser.password,
      );
      if (!isPasswordValid) {
        return Promise.reject({
          code: 102,
          status: false,
          message: 'Wrong password',
        });
      } else {
        return Promise.resolve({
          status: true,
          message: 'Sign in successfully completed',
          data: {
            access: await JWT.access_token({
              id: existingUser.id,
            }),
            refresh: await JWT.refresh_token({
              id: existingUser.id,
            }),
          },
        });
      }
    }
  } catch (e) {
    return Promise.reject({
      code: 105,
      status: false,
      message: '',
      error: e,
    });
  }
};
