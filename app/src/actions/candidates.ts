import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getCandidates() {
  const prisma = new PrismaClient();
  const candidates = await prisma.candidate.findMany();

  return candidates;
}

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
