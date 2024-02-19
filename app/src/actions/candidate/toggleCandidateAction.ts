"use server";
import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const toggleCandidateAction = async (id: number) => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    return { error: "Unable to toggle the candidate. Session ID not found" };
  }

  await prisma.candidate.update({
    where: {
      id,
      sessionID: sessionID?.value,
    },
    data: {
      isRemaining: false,
      updatedAt: new Date(),
    },
  });
};
