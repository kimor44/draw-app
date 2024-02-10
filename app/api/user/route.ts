import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        ipAddress: body.ipAddress,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `An error went when the user creation, ${error}` },
      { status: 500 }
    );
  }
};

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
