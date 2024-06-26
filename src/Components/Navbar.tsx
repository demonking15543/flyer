'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useCookies } from 'react-cookie'

type Props = {}

const NAVIGATION = [
  {
    to:"/features",
    label:"Features"

  },
  {
    to:"/pricing",
    label:"Pricing"

  },
  {
    to:"/industries",
    label:"Industries"

  },
  {
    to:"/resources",
    label:"Resources"

  },{
    to:"/support",
    label:"Support"

  },{
    to:"/login",
    label:"Login"

  },

]

type  user = {
  username: string,
  password: string,
  remberMe:boolean
}

export default function Navbar({}: Props) {
const [cookies, setCookie, removeCookie] = useCookies(['user'])
const router = useRouter()
const user = cookies.user

const handleRemove = () => {
  removeCookie('user');
  router.push('/login')

};



  return (
<header className="text-gray-600 body-font sticky top-0 z-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {
        NAVIGATION.map((item)=>(
          user?.username && item.label==="Login"? 
          <span role='button' onClick={handleRemove} className="mr-5 hover:text-gray-900">Logout</span>
          :

          <Link href={item.to} className="mr-5 hover:text-gray-900">{item.label}</Link>


        ))
 
      }   

      

    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Demo
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>  )
}