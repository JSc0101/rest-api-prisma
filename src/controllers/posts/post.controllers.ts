import { prisma } from "../../database/index.prisma";
import { Request, Response } from "express";

export const savePost = async (req: Request, res: Response) => {
  const post = await prisma.post.create({
    data: {
      title: "Jo Jo JO",
      content: "My content is really",
      published: true,
      author: {},
    },
  });
  console.log(post);
};
