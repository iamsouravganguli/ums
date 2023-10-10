import { Request, Response, NextFunction } from 'express';
import { JWT } from '../../helpers/jwt/jwt.js';

export const refresh_controller = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const refresh = await JWT.verify_refresh_token(req);
    res.status(200).jsonp({
      meta: {
        success: refresh.status,
        message: refresh.message,
      },
      data: refresh.data,
    });
  } catch (e) {
    next(e);
  }
};
