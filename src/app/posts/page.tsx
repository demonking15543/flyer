import PostCard from '@/Components/Cards/Post/PostCard'
import React from 'react'

type Props = {}


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',  { cache: 'force-cache', next: { revalidate: 30 } })


  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default  async function page({}: Props) {
  const data = await getData()

  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
   <PostCard data={data?.data}/>      
    </div>
  </div>
</section>
  )
}