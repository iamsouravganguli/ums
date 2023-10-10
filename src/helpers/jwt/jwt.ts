import { Request } from 'express';

import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';
import {
  access_private_Key,
  access_public_Key,
  refresh_private_Key,
  refresh_public_Key,
} from '../../rsa/rsa.js';
import { User } from '../../database/models/user.model.js';

export const JWT = {
  access_token: async (payload: any) => {
    try {
      const token = jsonwebtoken.sign(payload, access_private_Key, {
        algorithm: 'RS256',
        expiresIn: '2h',
        issuer: 'Sourav Ganguli',
        subject: 'Auth',
      });
      return Promise.resolve({
        token: token,
        expiresIn: '2h',
      });
    } catch (e) {
      return Promise.resolve({
        error: e,
      });
    }
  },
  refresh_token: async (payload: any) => {
    try {
      const token = jsonwebtoken.sign(payload, refresh_private_Key, {
        algorithm: 'RS256',
        expiresIn: '30d',
        issuer: 'Sourav Ganguli',
        subject: 'Auth',
        jwtid: '',
      });
      return Promise.resolve({
        token: token,
        expiresIn: '30d',
      });
    } catch (e) {
      return Promise.resolve({
        error: e,
      });
    }
  },
  verify_access_token: async (req: Request) => {
    try {
      const jwtString =
        req.headers.authorization && req.headers.authorization.split(' ')[1];
      if (!jwtString) {
        return Promise.reject({
          status: false,
          message: 'Access token token missing',
        });
      } else {
        const payload = jsonwebtoken.verify(jwtString, access_public_Key);
        return Promise.resolve({
          status: true,
          message: '',
          data: payload,
        });
      }
    } catch (e) {
      return Promise.reject({
        code: 105,
        status: false,
        message: 'Invalid token',
      });
    }
  },
  verify_refresh_token: async (req: Request) => {
    try {
      const jwtString = req?.body?.refresh_token;
      if (!jwtString) {
        return Promise.reject({
          status: false,
          message: 'Please enter refresh token',
        });
      } else {
        const payload = jsonwebtoken.verify(
          jwtString,
          refresh_public_Key,
        ) as JwtPayload;
        const existingUser = await User.findOne({
          where: { id: payload?.id },
        });
        if (!existingUser) {
          return Promise.reject({
            code: 100,
            status: false,
            message: 'User does not exist',
          });
          // return Promise.reject({
          //   status: true,
          //   message: '',
          //   data: payload,
          // });
        } else {
          return Promise.resolve({
            status: true,
            message: 'Refresh in successfully completed',
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
  },
};
