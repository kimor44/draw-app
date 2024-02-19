"use server";

import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";

export const deleteAllCandidatesAction = async () => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    const newSessionId = crypto.randomUUID();
    const newCookie = { name: "session-id", value: newSessionId };
    cookies().set(newCookie);
    sessionID = cookies().get("session-id");
  }

  await prisma.candidate.deleteMany({
    where: {
      sessionID: sessionID?.value,
    },
  });
};
