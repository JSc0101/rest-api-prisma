import { prisma } from "../../database/index.prisma";
import { Request, Response } from "express";

export const getPost = (req: Request, res: Response) => {
  const post = prisma.post.findMany();
  res.json(post);
};
