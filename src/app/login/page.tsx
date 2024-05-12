"use server";
import Login from '@/Components/accounts/Auth/Login'
import { cookies } from 'next/headers'
import React from 'react'

const handleSetUser =  async (user:string)=>{
    

    console.log('user', user)
    return null;

}

const page = () => {
    const cookieStore = cookies()
  


  return (
    <Login />
  )
}
export default page