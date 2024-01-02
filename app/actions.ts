"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function getCandidates() {
  const prisma = new PrismaClient();
  const candidates = await prisma.candidate.findMany();

  console.log("candidates :", candidates);

  return NextResponse.json(JSON.stringify(candidates));
}

export async function getUsers() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();

  return users;
}

export async function insertCandidates() {
  const prisma = new PrismaClient();
  await prisma.candidate.createMany({
    data: [
      {
        name: "Alice",
      },
      {
        name: "John",
      },
      {
        name: "Tonton",
      },
      {
        name: "Sandy",
      },
      {
        name: "Gégé",
      },
    ],
  });
}

export const deleteCandidate = async () => {
  const prisma = new PrismaClient();

  await prisma.candidate.deleteMany({});
};

export async function addUsers() {
  const prisma = new PrismaClient();
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
      },
      {
        name: "John",
      },
      {
        name: "Tonton",
      },
      {
        name: "Sandy",
      },
      {
        name: "Gégé",
      },
    ],
  });
}
