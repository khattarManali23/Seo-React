import Image from 'next/image'
// import React from 'react'
import ImageIcon from '../../assets/hercoPowerImages/svg/powerup.svg'

// if (typeof window !== 'undefined') import('@lottiefiles/lottie-player')

const LoadingScreen = () => {
  return (
    <section className="w-full">
      <div className="flex h-screen w-full items-center justify-center">
        <div className=" flex h-[80px] w-[130px] items-center justify-center sm:h-[140px] sm:w-[150px]">
          <Image
            className="rotate_animation"
            src={ImageIcon}
            height={80}
            width={57}
            alt="edveg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default LoadingScreen
