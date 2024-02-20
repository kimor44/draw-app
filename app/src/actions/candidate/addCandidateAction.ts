"use server";
import { prisma } from "@/app/lib/prisma/_base";
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
    return { error: "Name is required" };
  }

  try {
    const newCandidate = await prisma.candidate.create({
      data: {
        name: name as string,
        sessionID: sessionID?.value,
      },
    });

    return { message: `"${newCandidate.name}" added successfully` };
  } catch (error) {
    return { error: "Candidates must be unique" };
  }
};
