"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {FcGoogle} from "react-icons/fc"
import { Button } from "../ui/button";
const InputValidation = () => {
  return (
    <div className="my-5">
        <Button className="w-full" onClick={(()=>{signIn()})}>
          <FcGoogle className="mr-2 h-4 w-4" /> Login With Google
        </Button>
    </div>
  );
};

export default InputValidation;
