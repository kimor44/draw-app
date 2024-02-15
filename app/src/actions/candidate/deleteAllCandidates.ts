"use server";

import { getSessionIdAndCreateIfMissing } from "@/app/lib/session/sessionIdModel";
import { PrismaClient } from "@prisma/client";

export const deleteAllCandidates = async () => {
  const sessionID = await getSessionIdAndCreateIfMissing();
  try {
    const prisma = new PrismaClient();

    await prisma.candidate.deleteMany({
      where: {
        sessionID,
      },
    });
  } catch (error) {
    throw new Error(`impossible de supprimer tous les utilisateurs : ${error}`);
  }
};
