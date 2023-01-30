import { Request, Response } from "express";
import { prisma } from "../../database/index.prisma";
export const getUser = async (req: Request, res: Response) => {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  res.json(usersWithPosts);
};
