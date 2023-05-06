// import React from 'react'
import Image from 'next/image.js'
import { AppCarousel } from '../basics'
function TestimonialSliderTwo({ testimonials }) {
  const testimonialCarousel = {
    slidesToShow: 1,
    focusOnSelect: true,
  }
  return (
    <>
      <AppCarousel {...testimonialCarousel}>
        {testimonials?.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex w-full flex-col justify-center py-2 px-4">
                <div>
                  <span className=" font-semibold ">&quot;</span>
                  <p
                    className="h-20 overflow-hidden text-center text-lg leading-5"
                    dangerouslySetInnerHTML={{ __html: item?.test_comment }}
                  />
                  <span className="flex justify-end font-semibold ">
                    &quot;
                  </span>
                </div>

                <div className=" mb-2 flex ">
                  <div className="m-2">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaKIhsjAIEzRIRhYhgWJ1R3lcbBKjO0A_qw&usqp=CAU"
                      alt="Picture"
                      className="rounded-full object-cover"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="mt-5">
                    <span className="text-base font-medium text-home-content">
                      {item?.test_name}
                    </span>
                    {/* <br />
                    <span className="text-dark-grey text-sm">
                      {item?.designation}
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </AppCarousel>
    </>
  )
}

export default TestimonialSliderTwo
