"use server";

import { PrismaClient } from "@prisma/client";

export async function getCandidates() {
  const prisma = new PrismaClient();
  const candidates = await prisma.candidate.findMany();

  return candidates;
}
