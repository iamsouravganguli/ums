import { Request, Response, NextFunction } from 'express';
import { AddUserService } from '../../services/user/add.user.service.js';
export const signup_controller = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const database_res = await AddUserService(req);
    res.status(201).jsonp({
      meta: {
        success: true,
        message: database_res.message,
      },
      data: database_res.data,
    });
  } catch (e) {
    next(e);
  }
};
