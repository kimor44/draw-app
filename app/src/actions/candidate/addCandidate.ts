import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { revalidatePath } from "next/cache";

export const addCandidate = async (formData: FormData) => {
  const name = String(formData.get("name"));
  try {
    await fetch("http://localhost:3000/api/candidate", {
      method: "POST",
      body: JSON.stringify({ name: name, ipAddress: getIpAddress() }),
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error(`impossible de créer un utilisateur : ${error}`);
  }
};
