import {Request, Response, NextFunction} from 'express';
import {ApiResponse} from '@/utils/ApiResponse';
import {AppError} from '@/utils/AppError';

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = (err as AppError).statusCode || 500;
  let message = err.message;
  console.log(err.message);

  res.status(statusCode).json(new ApiResponse('fail', message));
};
