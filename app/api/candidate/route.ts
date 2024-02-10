import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  const prisma = new PrismaClient();

  try {
    const user = await prisma.candidate.create({
      data: {
        name: body.name,
        ipAddress: body.ipAddress,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `An error went when the candidate creation, ${error}` },
      { status: 500 }
    );
  }
};
