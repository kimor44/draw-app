("use server");

import { PrismaClient } from "@prisma/client";

export async function getUsers() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();

  return users;
}

export const toggleRemainingUser = async (id: number) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      isRemaining: false,
      UpdatedAt: new Date(),
    },
  });

  return user;
};

export const deleteCandidate = async () => {
  const prisma = new PrismaClient();

  await prisma.candidate.deleteMany({});
};

export async function addUsers() {
  const prisma = new PrismaClient();
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
      },
      {
        name: "John",
      },
      {
        name: "Tonton",
      },
      {
        name: "Sandy",
      },
      {
        name: "Gégé",
      },
    ],
  });
}
