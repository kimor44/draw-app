"use server";
import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const toggleCandidateAction = async (id: number) => {
  const sessionID = cookies().get("session-id");

  if (!sessionID) {
    return { warning: "Unable to toggle the candidate. Session ID not found" };
  }

  try {
    const toggleCandidate = await prisma.candidate.update({
      where: {
        id,
        sessionID: sessionID?.value,
      },
      data: {
        isRemaining: false,
        updatedAt: new Date(),
      },
    });

    if (!toggleCandidate) {
      return { warning: "Unable to toggle the candidate. Candidate not found" };
    }

    return {
      success: `"${toggleCandidate.name}" was removed from remaining candidates successfully`,
    };
  } catch {
    return { error: "Something went wrong ! Unable to toggle the candidate." };
  }
};
