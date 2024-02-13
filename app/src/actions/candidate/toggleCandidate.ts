"use server";

import { PrismaClient } from "@prisma/client";

export const toggleCandidate = async (id: number) => {
  const prisma = new PrismaClient();
  const candidate = await prisma.candidate.update({
    where: {
      id: id,
    },
    data: {
      isRemaining: false,
      updatedAt: new Date(),
    },
  });

  return candidate;
};
