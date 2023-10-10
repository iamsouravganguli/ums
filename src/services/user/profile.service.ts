import { Request } from 'express';
import { JWT } from '../../helpers/jwt/jwt.js';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../../database/models/user.model.js';
export const ProfileService = async (req: Request) => {
  try {
    const userID = (await JWT.verify_access_token(req)) as JwtPayload;
    const userProfile = await User.findOne({
      where: {
        id: userID?.id,
      },
    });
    if (!userProfile) {
      return Promise.reject('wrong');
    } else {
      return Promise.resolve({
        status: true,
        message: 'The requested resource was found',
        data: userProfile.user_profile_view,
      });
    }
  } catch (e) {
    return Promise.reject({
      code: 105,
      status: false,
      message: 'internal Server Error',
      error: e,
    });
  }
};
