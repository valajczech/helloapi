import { Request, Response, NextFunction } from "express";
import HttpException from "@/utils/exceptions/Http";

const ErrorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status = error.status || 500;
  const message = error.message || "Something went horribly wrong.";

  res.status(status).send({
    status,
    message,
  });
};

export default ErrorMiddleware;
