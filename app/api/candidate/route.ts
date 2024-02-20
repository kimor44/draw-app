"use server";
import { prisma } from "@/app/lib/prisma/_base";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  let sessionID = req.cookies.get("session-id");

  if (!sessionID) {
    return NextResponse.json([]);
  }

  const candidates = await prisma.candidate.findMany({
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

  return NextResponse.json(candidates);
};
