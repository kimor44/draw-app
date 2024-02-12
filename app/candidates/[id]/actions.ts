import { PrismaClient } from "@prisma/client";

export const getCandidateInformation = async (id: number) => {
  const prisma = new PrismaClient();

  try {
    const candidate = await prisma.candidate.findUnique({
      where: {
        id: id,
      },
    });

    if (!candidate) throw new Error(`User not found`);

    return candidate;
  } catch (error) {
    throw new Error(`Candidate not found : ${error}`);
  }
};
