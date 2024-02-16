"use server";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  let sessionID = req.cookies.get("session-id");
  const prisma = new PrismaClient();

  const users = await prisma.candidate.findMany({
    where: {
      sessionID: sessionID?.value,
    },
    orderBy: [
      {
        isRemaining: "desc",
      },
      {
        name: "asc",
      },
    ],
  });

  return NextResponse.json(users);
};
