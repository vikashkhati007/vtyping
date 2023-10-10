import { connectToDatabase } from "@/helper/server";
import prisma from "@/prisma";

export const RegisterUser = async (username:any, password:any ) => {
  try {
    // Ensure that the request body is parsed correctly as JSON

    if (!username || !password) {
      return "Invalid Input"
    }

     // Create a new user
     const check = await prisma.user.findFirst({
      where: {
        username: username,
        password: password
      }
    });
    if(check){
      return "User Already Registered"
    }

    // Connect to the database
    await connectToDatabase();

    // Create a new user
    const user = await prisma.user.create({
      data: { username, password },
    });

    // Return a JSON response with the created user
    return "User Registered Sucessfully"
  } catch (error) {
    console.error(error); // Use console.error() for errors
    return error
  } finally {
    // Disconnect from the database after the operation
    await prisma.$disconnect();
  }
};