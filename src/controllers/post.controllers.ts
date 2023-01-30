import { prisma } from "../database/index.prisma";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@prisma.io",
      posts: {
        create: {
          title: 'Hello world',
          content: 'Hi , world is content here!'
        },
      },
    },
  });
  console.log(user)
};

