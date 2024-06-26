"use client"
import React, { useState } from 'react'
import ScheduleBookingForm from './ScheduleBookingForm';

type Props = {
     // Define the type for handleChange prop
  };export default function HeroSection({}:Props) {
    const [openModal, setopenModal] = useState(false)
    const  openModel = () =>{
        setopenModal(!openModal)
    }
  return (
    <>
     <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">AI Based CRM
        </h1>
        <h5 className='text-2xl'>Designed For Your Growing Business</h5>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
        <button
        onClick={openModel}
        type="button" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg focus:ring-4 focus:ring-blue-300 font-medium  text-center me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
        Schedule Demo
        </button>

        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
      </div>
    </div>
  </section>
  {
    openModal &&
  <ScheduleBookingForm handClose={openModel}/>

  }
    </>
   
  )
}
