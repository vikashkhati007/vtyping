"use client";
export const dynamic = 'store';
import React from "react";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
const User = () => {
  const { data: session, status } = useSession();
  const [authenticate, setautheticate] = useState(false);
  if (status === "loading") {
    return <Skeleton className="w-9 h-9 rounded-md" />;
  }
  if (status === "authenticated" && !authenticate) {
    setautheticate(true);
  }
  return (
    <>
      {!authenticate ? (
        <div
          className=" border px-2 py-1 cursor-pointer rounded-md"
          onClick={() => {
            signIn();
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path
              fill="currentColor"
              d="M21 16a3 3 0 0 1 3 3v.715C24 23.292 19.79 26 14 26S4 23.433 4 19.715V19a3 3 0 0 1 3-3h14ZM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12Z"
            />
          </svg>
        </div>
      ) : (
        <div
          onClick={() => {
            signOut();
          }}
          className=" border cursor-pointer rounded-md"
        >
          {" "}
          <Image
            className="rounded-md"
            src={session?.user?.image || ""}
            width={35}
            height={35}
            alt="profile"
          />
        </div>
      )}
    </>
  );
};

export default User;
