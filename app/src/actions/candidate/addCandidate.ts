"use server";

import { getSessionIdAndCreateIfMissing } from "@/app/lib/session/sessionIdModel";
import { revalidatePath } from "next/cache";

export const addCandidate = async (formData: FormData) => {
  const name = String(formData.get("name"));
  const sessionID = await getSessionIdAndCreateIfMissing();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const newCandidate = await fetch(`${apiUrl}/api/candidate`, {
      method: "POST",
      body: JSON.stringify({ name, sessionID }),
    });

    if (!newCandidate.ok) {
      throw new Error("Candidates must be unique.");
    }

    revalidatePath("/");
  } catch (error) {
    throw new Error(`Unable to create this candidate : ${error}`);
  }
};
