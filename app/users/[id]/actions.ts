import { PrismaClient } from "@prisma/client";

export const getUserInformation = async (id: number) => {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) throw new Error(`User not found`);

    return user;
  } catch (error) {
    throw new Error(`User not found : ${error}`);
  }
};
