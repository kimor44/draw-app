"use server";

import { getSessionId } from "@/app/lib/session/getSessionId";
import { PrismaClient } from "@prisma/client";

export const deleteCandidateAction = async (id: number) => {
  const sessionID = await getSessionId();
  const prisma = new PrismaClient();

  await prisma.candidate.delete({
    where: {
      id,
      sessionID: sessionID?.value,
    },
  });
};
