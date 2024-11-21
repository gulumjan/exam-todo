import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export const POST = async (request: Request) => {
  try {
    const { title, image } = await request.json();

    const newTodo = await prisma.todo.create({
      data: {
        title,
        image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json(
      { message: "An error occurred", error: error },
      { status: 500 }
    );
  }
};
