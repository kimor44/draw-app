"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function getCandidates() {
  const prisma = new PrismaClient();
  const candidates = await prisma.candidate.findMany();

  return NextResponse.json(JSON.stringify(candidates));
}

export async function getUsers() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();

  return users;
}

export const toggleRemainingUser = async (id: number) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      isRemaining: false,
    },
  });

  return user;
};

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

export const addUser = async (formData: FormData) => {
  const name = String(formData.get("name"));
  try {
    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({ name: name }),
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error(`impossible de créer un utilisateur : ${error}`);
  }
};
