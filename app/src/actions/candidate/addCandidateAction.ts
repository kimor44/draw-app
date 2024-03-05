"use server";
import { prisma } from "@/app/lib/prisma/_base";
import { cookies } from "next/headers";
import { z } from "zod";

const CandidateSchema = z.object({
  name: z.string(),
});

type TAddCandidateAction = z.infer<typeof CandidateSchema>;

const newCandidateSchema = z.object({
  id: z.number(),
  name: z.string(),
  isRemaining: z.boolean(),
  sessionID: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

type TNewCandidate = z.infer<typeof newCandidateSchema>;

export const addCandidateAction = async (formData: FormData) => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    const newSessionId = crypto.randomUUID();
    const newCookie = { name: "session-id", value: newSessionId };
    cookies().set(newCookie);
    sessionID = cookies().get("session-id");
  }

  const name = String(formData.get("name"));

  const newName: TAddCandidateAction = CandidateSchema.parse({ name: name });

  if (!newName.name) {
    return { error: "Name is required" };
  }

  try {
    const newCandidate: TNewCandidate = await prisma.candidate.create({
      data: {
        name: newName.name,
        sessionID: sessionID?.value,
      },
    });

    return { message: `"${newCandidate.name}" added successfully` };
  } catch (error) {
    return { error: "Candidates must be unique" };
  }
};
