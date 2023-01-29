import { prisma } from "../database/index.prisma";

export const createUser = async () => {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);
};
createUser()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
