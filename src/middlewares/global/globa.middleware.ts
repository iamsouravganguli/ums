import { Request, Response, NextFunction } from 'express';

export const GlobaMiddleware = async (
  err: {
    code: number;
    status: boolean;
    message: string;
    error?: any;
  },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (err) {
      if (err.code === 105) {
        res.status(400).jsonp({
          meta: {
            success: err.status,
            message: err.message,
          },
          error: err.error,
        });
      } else {
        next();
      }
    } else {
      next();
    }
  } catch (e) {
    next(e);
  }
};
