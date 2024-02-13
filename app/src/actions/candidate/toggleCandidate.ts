"use server";

import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { PrismaClient } from "@prisma/client";

export const toggleCandidate = async (id: number) => {
  const prisma = new PrismaClient();
  const ipAddress = await getIpAddress();

  const candidate = await prisma.candidate.update({
    where: {
      id,
      ipAddress,
    },
    data: {
      isRemaining: false,
      updatedAt: new Date(),
    },
  });

  return candidate;
};
