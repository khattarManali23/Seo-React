import Image from 'next/image'
// import React from 'react'
import { AppCarousel, AppReadMore } from '../basics'

export default function TestimonialsSlider({ testimonials }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    infinite: testimonials?.length >= 3 ? true : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="">
      <div className="relative">
        <div className="absolute left-[-6rem] top-36 -rotate-90 text-xs font-bold uppercase leading-8 tracking-wider">
          TESTIMONIALS
          <div className="mt-[-18px] ml-[-10rem] w-36 border-b-2 border-black" />
        </div>
      </div>
      <div>
        <div className="  w-11/12 text-left  sm:w-8/12">
          <p className="p-4 m-0 font-raleway text-[21px] font-bold  md:my-2 md:text-4xl lg:w-10/12">
            <span className="theme-heading"> Happy Clients: </span>
            Testimonials for our Professional Electrical Services.
          </p>
        </div>
      </div>

      <AppCarousel {...settings}>
        {testimonials?.map((item, index) => {
          return (
            <div key={index} className="  w-full p-4">
              <div className="animate-opacityAnimation rounded-lg bg-white shadow-shadow-harco md:my-2 md:mx-1">
                <div className="flex w-full flex-col justify-center p-5">
                  <div className=" px-2">
                    <p className="m-0  opacity-70  text-sm font-medium  sm:text-custom-15">
                      <AppReadMore height={'145px'} length={200}>
                        {item?.test_comment}
                      </AppReadMore>
                    </p>
                  </div>
                  <div className="mt-7 flex h-16 w-full">
                    <div className="mr-2">
                      <Image
                        loading="lazy"
                        src={item?.image}
                        alt="Picture"
                        className="rounded-full object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="w-full pt-1">
                      <span className="font-inter text-base font-semibold text-home-content">
                        {item?.test_name}
                      </span>
                      <br />
                      <span className="theme-heading font-raleway  text-sm font-semibold">
                        {item?.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </AppCarousel>

      {/* <div className="w-w-main flex justify-end">
        <ViewAllButton />
      </div> */}
      {/* </AppCarousel> */}
    </div>
  )
}
