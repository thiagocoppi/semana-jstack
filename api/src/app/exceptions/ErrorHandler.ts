import { Response, Request } from 'express';
import { ErrorException } from './ErrorException';
import { ErrorModel } from './ErrorModel';
import { HttpCode } from './HttpCode';


export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.log('Error handling middleware called.');
  console.log('Path:', req.path);
  console.error('Error occured:', err);
  if (err instanceof ErrorException) {
    console.log('Error is known.');
    res.status(err.status).json(err);
    return;
  }

  res.status(500).json({ code: HttpCode.UnknownError, status: 500 } as ErrorModel);
};
