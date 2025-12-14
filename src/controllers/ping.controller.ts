import { Request, Response } from "express";

export const pingHandler = (req: Request, res: Response) => {

  console.log("request body", req.body)
  console.log("request body", req.query)


  res.status(200).json({
    message: "This is pong controller",
  });
};
