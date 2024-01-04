import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return new Response(`An error went ${error}`, { status: 500 }).json();
  }
};
