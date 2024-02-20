"use server";

import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const deleteCandidateAction = async (id: number) => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    return {
      error: "Unable to delete the candidate. Session ID not found",
    };
  }

  await prisma.candidate.delete({
    where: {
      id,
      sessionID: sessionID?.value,
    },
  });

  return { success: "Candidate was deleted successfully" };
};
