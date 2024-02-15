"use server";

import { getSessionId } from "@/app/lib/session/sessionIdModel";
import { PrismaClient } from "@prisma/client";

export const toggleCandidate = async (id: number) => {
  const prisma = new PrismaClient();
  const sessionID = await getSessionId();

  const candidate = await prisma.candidate.update({
    where: {
      id,
      sessionID,
    },
    data: {
      isRemaining: false,
      updatedAt: new Date(),
    },
  });

  return candidate;
};
