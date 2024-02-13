"use server";

import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { PrismaClient } from "@prisma/client";

export async function getCandidates() {
  const prisma = new PrismaClient();
  const ipAddress = await getIpAddress();

  const candidates = await prisma.candidate.findMany({
    where: {
      ipAddress,
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
