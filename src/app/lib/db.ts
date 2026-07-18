import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri || typeof mongodbUri !== "string") {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

const MONGODB_URI: string = mongodbUri;

const cached = globalThis.mongooseCache ?? {
  conn: null,
  promise: null,
};

globalThis.mongooseCache = cached;

export async function connectDb(): Promise<mongoose.Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "library",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
