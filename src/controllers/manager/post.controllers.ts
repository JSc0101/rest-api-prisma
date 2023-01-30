import { prisma } from "../../database/index.prisma";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: "joe",
      email: "joe@prisma.io",
      posts: {
        create: {
          title: "new post",
          content: "Hi , world is here",
        },
      },
    },
  });
 console.log(user)
};
