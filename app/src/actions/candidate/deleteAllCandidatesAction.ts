"use server";

import { getErrorMessage } from "@/app/lib/errors/getErrorMessage";
import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const deleteAllCandidatesAction = async (ids: number[]) => {
  if (ids.length === 0) {
    return { warning: "No candidates to delete" };
  }

  const sessionID = cookies().get("session-id");

  if (!sessionID) {
    return {
      warning: "Unable to delete all the candidates. Session ID not found",
    };
  }

  try {
    const candidatesToDelete = await prisma.candidate.findMany({
      where: {
        id: { in: ids },
        sessionID: sessionID?.value,
      },
    });

    if (candidatesToDelete.length === 0) {
      return {
        warning: "Something went wrong. Unable to delete the candidates",
      };
    }

    await prisma.candidate.deleteMany({
      where: {
        id: { in: ids },
        sessionID: sessionID?.value,
      },
    });

    return { success: "All candidates deleted successfully" };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
