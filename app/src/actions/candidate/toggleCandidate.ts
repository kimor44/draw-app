"use server";

import { getSessionId } from "@/app/lib/session/sessionIdModel";
import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { PrismaClient } from "@prisma/client";

export const toggleCandidate = async (id: number) => {
  const prisma = new PrismaClient();
  const ipAddress = await getIpAddress();
  const sessionID = getSessionId();

  const candidate = await prisma.candidate.update({
    where: {
      id,
      ipAddress,
      sessionID,
    },
    data: {
      isRemaining: false,
      updatedAt: new Date(),
    },
  });

  return candidate;
};
