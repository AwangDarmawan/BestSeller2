
import HeroSection from '../Components/Hero/HeroSection'
import PasanganSection from '../Components/Pasangan/PasanganSection'
import AcaraSection from '../Components/Acara/AcaraSection'
import GallerySection from '../Components/Galerry/GallerySection'
import StorySection from '../Components/Love Story/StorySection'
import GiftSection from '../Components/Gift/GiftSection'
import RsvpSection from '../Components/RSVP/RsvpSection'
import Footer from '../Components/Footer'
import MengundangSection from '../Components/Mengundang/MengundangSection'
import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import Lagu from "../assets/VD/BatasSenja.mp3"

function HomePage() {
   const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }
}, []);
  return (
    <>
   
      <HeroSection/>
      <PasanganSection/>
      <AcaraSection/>
      <GallerySection/>
      <StorySection/>
      <GiftSection/>
      <RsvpSection/>
      <MengundangSection/>
      <Footer/>

           <button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
  


  


  className="
     fixed
    bottom-6
    right-5
    z-50
    w-12
    h-12
    rounded-full
    border
  border-white
  bg-[#36554C]
  text-white
    flex
    items-center
    justify-center
      shadow-[0_4px_15px_rgba(62,92,147,0.5)]
    
"
>
  {isPlaying ? (
     <Volume2 size={22} />
  ) : (
   
       <VolumeX size={22} />
   
     )}
</button>

     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={Lagu} type="audio/mp3" />
   </audio>
     
    </>
  )
}

export default HomePage
