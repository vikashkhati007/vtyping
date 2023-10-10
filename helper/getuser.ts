import { connectToDatabase } from "@/helper/server";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GetUsers = async (username: any, password: any) => {
  try {
    // Ensure that the request body is parsed correctly as JSON

    if (!username || !password) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    }

    // Connect to the database
    await connectToDatabase();

    // Create a new user
    const user = await prisma.user.findFirst({
      where: {
        username: username,
        password: password
      }
    });

    // Return a JSON response with the created user
    return user;
  } catch (error) {
    console.error(error); // Use console.error() for errors
    return NextResponse.json({ message: "Unable to Connect" }, { status: 500 });
  } finally {
    // Disconnect from the database after the operation
    await prisma.$disconnect();
  }
};
