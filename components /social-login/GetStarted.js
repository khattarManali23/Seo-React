import Image from 'next/image'
// import React from 'react'
import logopng from '../../assets/hercoPowerImages/logo.png'
import bgImg from '../../assets/hercoPowerImages/png/Frame 1000001295.png'
import { AppButton } from '../basics'
import { HiOutlineChevronRight } from 'react-icons/hi'

export default function GetStarted({ handleChangeUserVisit }) {
  return (
    <section className="relative flex h-screen items-center justify-center bg-[#030143]">
      <div>
        <div className="absolute right-0 top-0  h-full">
          <Image priority src={bgImg} height={400} width={260} alt="edveg" />
        </div>
        <div className="flex items-center justify-center">
          <Image
            priority
            src={logopng}
            alt="Picture of the author"
            width={154}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center py-2">
          <span className="text-sm font-medium text-white opacity-80">
            Power up your business with Herco
          </span>
        </div>
        <div className="flex items-end justify-center">
          <div className="mt-10">
            <AppButton
              endIcon={<HiOutlineChevronRight size={15} />}
              onClick={() => handleChangeUserVisit()}
              variant="contained"
              size="medium"
              title={'Get Started'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
