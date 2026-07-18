import { BookSchema } from "@/app/lib/validators";
import { createBook, getAllBooks } from "@/app/services/book.service";

import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET() {
  try {
    const books = await getAllBooks();
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "failed to fetch books",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = BookSchema.parse(body);

    const book = await createBook(validatedData);

    return NextResponse.json(book, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Validation failed.",
          errors: error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 409,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Internal Server Error.",
      },
      {
        status: 500,
      },
    );
  }
}
