import { Request, Response } from "express";
import { prisma } from "../database/index.prisma";
export const getUser = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};
