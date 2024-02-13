"use server";

import { PrismaClient } from "@prisma/client";

export const deleteAllCandidates = async () => {
  try {
    const prisma = new PrismaClient();

    await prisma.candidate.deleteMany();
  } catch (error) {
    throw new Error(`impossible de supprimer tous les utilisateurs : ${error}`);
  }
};
