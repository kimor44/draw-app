"use server";

import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { PrismaClient } from "@prisma/client";

export const deleteAllCandidates = async () => {
  const ipAddress = await getIpAddress();
  try {
    const prisma = new PrismaClient();

    await prisma.candidate.deleteMany({
      where: {
        ipAddress,
      },
    });
  } catch (error) {
    throw new Error(`impossible de supprimer tous les utilisateurs : ${error}`);
  }
};
