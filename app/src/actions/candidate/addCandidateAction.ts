"use server";
import { getSessionId } from "@/app/lib/session/getSessionId";
import { PrismaClient } from "@prisma/client";

export const addCandidateAction = async (formData: FormData) => {
  const sessionID = await getSessionId();

  const name = formData.get("name");

  if (!name) {
    return;
  }

  const prisma = new PrismaClient();

  await prisma.candidate.create({
    data: {
      name: name as string,
      sessionID: sessionID?.value,
    },
  });
};
