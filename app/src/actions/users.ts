"use server";

import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
      UpdatedAt: new Date(),
    },
  });

  return user;
};

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
      body: JSON.stringify({ name: name, ipAddress: getIpAddress() }),
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error(`impossible de créer un utilisateur : ${error}`);
  }
};
