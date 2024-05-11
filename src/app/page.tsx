import Feature from "@/Components/Feature";
import HeroSection from "@/Components/HeroSection";
import Partners from "@/Components/Partners";
import ScheduleBookingForm from "@/Components/ScheduleBookingForm";
import Testimonial from "@/Components/Testimonial";
import Image from "next/image";

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <Feature/>
      <Partners/>
      <Testimonial/>
     
    </main>
  );
}
