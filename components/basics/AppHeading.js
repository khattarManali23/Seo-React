// import React from 'react'
import { FadeIn } from '../animate'

function AppHeading({ title, content }) {
  return (
    <FadeIn durationTime={'1.5s'}>
      <div className="flex justify-center">
        <div className="py-2 text-center sm:py-10">
          <span className="theme-heading h-12 font-raleway text-xl font-extrabold capitalize sm:text-custom-44 md:h-14">
            {title}
          </span>
          <p className="m-2 mx-auto w-16 rounded-lg border-b-3 border-theme-primary-main md:m-4 md:mx-auto md:w-20" />
          <div className="mx-auto  w-11/12 sm:w-8/12">
            <span
              dangerouslySetInnerHTML={{
                __html: content,
              }}
              className="font-inter text-sm font-medium opacity-60 md:text-base"
            ></span>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default AppHeading
