"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

export const toggleCandidateAction = async (id: number) => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    const newSessionId = crypto.randomUUID();
    const newCookie = { name: "session-id", value: newSessionId };
    cookies().set(newCookie);
    sessionID = cookies().get("session-id");
  }

  const prisma = new PrismaClient();
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
