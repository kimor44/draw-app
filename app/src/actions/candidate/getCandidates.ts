"use server";

import { getSessionIdAndCreateIfMissing } from "@/app/lib/session/sessionIdModel";
import { PrismaClient } from "@prisma/client";

export async function getCandidates() {
  const prisma = new PrismaClient();
  const sessionID = await getSessionIdAndCreateIfMissing();

  const candidates = await prisma.candidate.findMany({
    where: {
      sessionID,
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
}
