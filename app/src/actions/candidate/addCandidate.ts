"use server";

import { revalidatePath } from "next/cache";

export const addCandidate = async (formData: FormData) => {
  const name = String(formData.get("name"));

  const apiUrl = process.env.API_URL;

  console.log("api_url : ", apiUrl);

  try {
    const newCandidate = await fetch(`${apiUrl}/api/candidate`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
    });

    if (!newCandidate.ok) {
      throw new Error("Candidates must be unique.");
    }

    revalidatePath("/");
  } catch (error) {
    throw new Error(`Unable to create this candidate : ${error}`);
  }
};
