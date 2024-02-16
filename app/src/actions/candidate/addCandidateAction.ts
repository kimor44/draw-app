"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

export const addCandidateAction = async (formData: FormData) => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    const newSessionId = crypto.randomUUID();
    const newCookie = { name: "session-id", value: newSessionId };
    cookies().set(newCookie);
    sessionID = cookies().get("session-id");
  }

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
