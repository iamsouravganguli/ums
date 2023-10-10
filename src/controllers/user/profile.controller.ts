import { Request, Response, NextFunction } from 'express';
import { ProfileService } from '../../services/user/profile.service.js';

export const profile_controller = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const profileView = await ProfileService(req);
    res.status(200).jsonp({
      meta: {
        success: profileView.status,
        message: profileView.message,
      },
      data: profileView.data,
    });
  } catch (e) {}
};
