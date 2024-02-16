"use server";

import { getSessionId } from "@/app/lib/session/getSessionId";
import { PrismaClient } from "@prisma/client";

export const getCandidates = async () => {
  const sessionID = await getSessionId();

  const prisma = new PrismaClient();

  const candidates = await prisma.candidate.findMany({
    where: {
      sessionID: sessionID?.value,
    },
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
