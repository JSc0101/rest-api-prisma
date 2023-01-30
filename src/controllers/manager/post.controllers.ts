import { prisma } from "../../database/index.prisma";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  let includePosts: boolean = false;
  let user: Prisma.userCreateInput;

  if (includePosts) {
    user = {
      email: "elsa@prisma.io",
      name: "Elsa Prisma",
      posts: {
        create: {
          title: "Include this post!",
          content: "jo jo jo",
        },
      },
    };
  } else {
    user = {
      email: "elsa@prisma.io",
      name: "Elsa Prisma",
    };
  }
  const createUser = await prisma.user.create({ data: user });
};
