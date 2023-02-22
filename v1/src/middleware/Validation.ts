import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from "joi";

const validationMiddleware = (schema: Joi.Schema): RequestHandler => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };
    try {
      const value = await schema.validateAsync(req.body, validationOptions);
      req.body = value;
      next();
    } catch (e: any) {
      const errors: Array<string> = [];
      e.details.forEach((error: Joi.ValidationError) => {
        errors.push(error.message);
        res.status(400).send({
          errors: {
            errors,
          },
        });
      });
    }
  };
};

export default validationMiddleware;
