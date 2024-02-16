"use server";

import { getSessionId } from "@/app/lib/session/getSessionId";
import { PrismaClient } from "@prisma/client";

export const deleteAllCandidates = async () => {
  const sessionID = await getSessionId();
  const prisma = new PrismaClient();

  await prisma.candidate.deleteMany({
    where: {
      sessionID: sessionID?.value,
    },
  });
};
