"use server";

import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const deleteAllCandidatesAction = async () => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    return {
      error: "Unable to delete all the candidates. Session ID not found",
    };
  }

  await prisma.candidate.deleteMany({
    where: {
      sessionID: sessionID?.value,
    },
  });
};
