import mongoose, { Schema, Model, Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  category: string;
  publicationYear: number;
  description: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    publicationYear: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Book: Model<IBook> =
  mongoose.models.Book || mongoose.model<IBook>("Book", BookSchema);

export default Book;