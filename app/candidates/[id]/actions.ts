import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const getCandidateInformation = async (id: number) => {
  const sessionID = cookies().get("session-id");

  if (!sessionID) {
    return;
  }

  try {
    const candidate = await prisma.candidate.findUnique({
      where: {
        id,
        sessionID: sessionID?.value,
      },
    });

    return candidate;
  } catch (error) {
    throw new Error(`Candidate not found : ${error}`);
  }
};
