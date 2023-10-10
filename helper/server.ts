import prisma from "@/prisma"
export const connectToDatabase = () =>{
    try{
        prisma.$connect();
    }
     catch(error){ 
        console.log(error);
        throw new Error("Unable To connect Database");
     }

}