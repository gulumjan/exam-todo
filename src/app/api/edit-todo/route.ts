import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PATCH = async (request: Request) => {
  try {
    const { id, data } = await request.json();
    if (!id) {
      return NextResponse.json(
        { message: "Todo id is required" },
        { status: 400 }
      );
    }

    const updatedTodo = await prisma.todo.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.log("Error updating Todo", error);
    return NextResponse.json(
      { message: "Failed to update todo", error },
      { status: 500 }
    );
  }
};
