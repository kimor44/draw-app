"use server";
import { PrismaClient } from "@prisma/client";
// import { cookies } from "next/headers";

export const getCandidates = async () => {
  // let sessionID = cookies().get("session-id");

  // if (!sessionID) {
  //   const newSessionId = crypto.randomUUID();
  //   const newCookie = { name: "session-id", value: newSessionId };
  //   // cookies().set(newCookie);
  //   // sessionID = cookies().get("session-id");
  // }

  const prisma = new PrismaClient();

  const candidates = await prisma.candidate.findMany({
    orderBy: [
      {
        isRemaining: "desc",
      },
      {
        name: "asc",
      },
    ],
  });

  return candidates;
};
