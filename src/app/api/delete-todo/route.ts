import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    if (!id) {
      return NextResponse.json({ message: "Id is required" });
    }
    const todoId = parseInt(id);
    const deletedTodo = await prisma.todo.delete({
      where: { id: todoId },
    });

    return NextResponse.json(deletedTodo, { status: 201 });
  } catch (error) {
    console.log("Prisma error", error);
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
};
