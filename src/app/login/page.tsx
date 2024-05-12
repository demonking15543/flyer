import Login from '@/Components/accounts/Auth/Login'
import { cookies } from 'next/headers'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  console.log("theme123330", theme
)

  return (
    <Login/>
  )
}
export default page