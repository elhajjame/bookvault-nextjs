import { BookInput, BookSchema } from "@/app/lib/validators";
import { getBookById, updateBook } from "@/app/services/book.service";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const book = await getBookById(id);
    if (!book) {
      return NextResponse.json(
        {
          message: "book not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(book, {
      status: 202,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();

    const validatedData = BookSchema.partial().parse(body);
    const updatedBook = await updateBook(id, validatedData);

    if (!updateBook) {
      return NextResponse.json(
        { message: "the book not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(updatedBook, { status: 202 });
  } catch (error) {
    console.log(error);

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

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const deletedBook = await deleteBook(id);

    if (!deletedBook) {
      return NextResponse.json(
        {
          message: "Book not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Book deleted successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

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
