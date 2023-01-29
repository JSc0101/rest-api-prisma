import { Request, Response } from "express";
export const getUser = (req: Request, res: Response) => {
  res.json({ Welcome: "Hello welcome to my api use prisma" });
};
