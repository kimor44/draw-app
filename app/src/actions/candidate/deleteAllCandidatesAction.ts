"use server";

import { getErrorMessage } from "@/app/lib/errors/getErrorMessage";
import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const deleteAllCandidatesAction = async () => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    return {
      error: "Unable to delete all the candidates. Session ID not found",
    };
  }

  try {
    await prisma.candidate.deleteMany({
      where: {
        sessionID: sessionID?.value,
      },
    });

    return { success: "All candidates deleted successfully" };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
