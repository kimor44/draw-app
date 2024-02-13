"use server";

import { PrismaClient } from "@prisma/client";

export async function getCandidates() {
  const prisma = new PrismaClient();

  const candidates = await prisma.candidate.findMany({
    orderBy: [
      {
        isRemaining: "desc",
      },
      {
        name: "asc",
      },
    ],
  });

  return candidates;
}
