"use server";

import { prisma } from "@/app/lib/prisma/_base";

export const getCandidates = async () => {
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
};
