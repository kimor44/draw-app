"use server";
import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const toggleCandidateAction = async (id: number) => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    const newSessionId = crypto.randomUUID();
    const newCookie = { name: "session-id", value: newSessionId };
    cookies().set(newCookie);
    sessionID = cookies().get("session-id");
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
