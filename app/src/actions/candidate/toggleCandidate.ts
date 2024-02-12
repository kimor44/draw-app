import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { PrismaClient } from "@prisma/client";

export const toggleCandidate = async (id: number) => {
  const prisma = new PrismaClient();
  const candidate = await prisma.candidate.update({
    where: {
      id: id,
      ipAddress: getIpAddress(),
    },
    data: {
      isRemaining: false,
      updatedAt: new Date(),
    },
  });

  return candidate;
};
