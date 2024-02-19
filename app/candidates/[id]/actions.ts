import { prisma } from "@/app/lib/prisma/_base";

export const getCandidateInformation = async (id: number) => {
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
