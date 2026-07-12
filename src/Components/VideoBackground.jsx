import backgroundVideo from "../assets/VD/vdpenganten.mp4";

function VideoBackground() {
  return (
    <>
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/wedding.mp4" type="video/mp4" />
      </video> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          -z-20

          h-screen
          w-full

          object-cover

          lg:mx-auto
          lg:h-auto
          lg:w-auto
          lg:max-h-screen
          lg:max-w-full
          lg:object-contain
           
            
        "
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </>
  )
}

export default VideoBackground
