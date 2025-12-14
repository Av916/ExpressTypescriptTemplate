import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequestBody = async (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("req body is valid");
      next();
    } catch (error) {
      return res.status(400).json({
        message: "message body is invalid",
        success: false,
        error,
      });
    }
  };
};

export const validateQueryParam = async (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.params);
      console.log("req param valid");
      next();
    } catch (error) {
      return res.status(400).json({
        message: "message param is invalid",
        success: false,
        error,
      });
    }
  };
};
