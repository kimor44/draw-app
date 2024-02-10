import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
  const body = await req.json();
  const prisma = new PrismaClient();

  try {
    await prisma.user.delete({
      where: {
        id: Number(body.id),
      },
    });

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `An error went ${error}` },
      { status: 500 }
    );
  }
};
