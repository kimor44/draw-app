"use server";

import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { revalidatePath } from "next/cache";

export const addCandidate = async (formData: FormData) => {
  const name = String(formData.get("name"));

  try {
    const newCandidate = await fetch("http://localhost:3000/api/candidate", {
      method: "POST",
      body: JSON.stringify({ name: name, ipAddress: getIpAddress() }),
    });

    revalidatePath("/");

    if (!newCandidate.ok) {
      throw new Error("Candidates must be unique.");
    }

    return newCandidate.json();
  } catch (error) {
    throw new Error(`Unable to create this candidate : ${error}`);
  }
};
