"use server";

import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { revalidatePath } from "next/cache";

export const addCandidate = async (formData: FormData) => {
  const name = String(formData.get("name"));
  const ipAddress = await getIpAddress();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const newCandidate = await fetch(`${apiUrl}/api/candidate`, {
      method: "POST",
      body: JSON.stringify({ name, ipAddress }),
    });

    if (!newCandidate.ok) {
      throw new Error("Candidates must be unique.");
    }

    revalidatePath("/");
  } catch (error) {
    throw new Error(`Unable to create this candidate : ${error}`);
  }
};
