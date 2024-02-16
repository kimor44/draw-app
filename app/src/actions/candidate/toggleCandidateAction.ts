"use server";
import { PrismaClient } from "@prisma/client";
import { getSessionId } from "@/app/lib/session/getSessionId";

export const toggleCandidateAction = async (id: number) => {
  const sessionID = await getSessionId();
  const prisma = new PrismaClient();
  await prisma.candidate.update({
    where: {
      id,
      sessionID: sessionID?.value,
    },
    data: {
      isRemaining: false,
      updatedAt: new Date(),
    },
  });
};
