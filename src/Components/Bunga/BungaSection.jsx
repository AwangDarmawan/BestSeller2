import Bunga from "./Bunga";


export default function BungaSection() {
  return (
    <>
      {/* ===================== */}
      {/* Atas Kiri */}
      {/* ===================== */}
      <Bunga
      opacity="opacity-20"
        
        position="top-[-130px] left-[-130px] lg:top-[-100px] lg:left-[400px] md:top-[-200px] md:left-[-200px] sm:top-[-99px] sm:left-[-100px]"
        
      />

      {/* ===================== */}
      {/* Atas Kanan */}
      {/* ===================== */}
      <Bunga
      opacity="opacity-20"
        
        position="top-[-120px] right-[-130px] lg:top-[-200px] lg:right-[-200px] md:top-[-200px] md:right-[-200px] sm:top-[-99px] sm:right-[-100px]"
   
   
      />

      {/* ===================== */}
      {/* Bawah Kiri */}
      {/* ===================== */}
      <Bunga
      opacity="opacity-20"
         
        position="bottom-[-130px] left-[-130px] lg:bottom-[-200px] lg:left-[-200px] md:bottom-[-200px] md:left-[-200px] sm:bottom-[-99px] sm:left-[-100px]"
    
      
      />

      {/* ===================== */}
      {/* Bawah Kanan */}
      {/* ===================== */}
      <Bunga
      opacity="opacity-20"
        
        position="bottom-[-130px] right-[-130px] lg:bottom-[-200px] lg:right-[-200px] md:bottom-[-200px] md:right-[-200px] sm:bottom-[-99px] sm:right-[-100px]"
       
      />
    </>
  );
}