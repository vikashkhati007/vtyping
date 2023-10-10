"use client"
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'


const page = () => {
  return (
    <div className='border flex justify-center items-center'>
      <h1>hello</h1>
     <a className='cursor-pointer' onClick={(()=>{signIn})}>Clickk Me</a>
      <button className='text-white' ></button>
    </div>
  )
}

export default page
