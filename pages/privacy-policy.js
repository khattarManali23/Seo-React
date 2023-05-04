// import React from 'react'
import { DefaultSeo } from 'next-seo'
import { FadeRight } from 'src/components/animate'
import { AppData } from 'src/data/app-data'
import GlobalSEO from 'src/data/next-seo.data'
function PrivacyPolicy() {
  const { shopEmailIndia } = AppData?.webSiteData
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/privacy-policy']} />
      <FadeRight durationTime={'1s'}>
        <section className="mx-auto my-16 px-5 md:container md:my-20">
          <h1 className="my-7 text-center font-raleway text-[25px]  font-semibold capitalize tracking-wide">
            Privacy Policy
          </h1>
          <div className="mx-auto mt-10 md:w-10/12">
            <div className="mb-7">
              <p className="text-justify font-inter text-base font-light leading-7">
                At Herco Power, we are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, share, and
                protect the information you provide to us when you visit our
                website.
              </p>
            </div>
            <div className="mb-7">
              <p className="text-justify font-inter text-base font-light leading-7">
                We may collect personal information, such as your name, email
                address, and phone number, when you register on our website,
                create an account, or sign up for our newsletter. We may also
                collect information about your browsing habits and usage of our
                website.
              </p>
            </div>
            <div className="mb-7">
              <p className="text-justify font-inter text-base font-light leading-7">
                We may use the personal information we collect to provide you
                with personalized services and communications, to better
                understand your interests, and to improve our website. We may
                also use the information to contact you regarding our products
                and services, or to respond to your inquiries.
              </p>
            </div>
            <div className="mb-7">
              <p className="text-justify font-inter text-base font-light leading-7">
                We may share your personal information with third parties in
                order to provide you with better services, such as payment
                processors, analytics providers, and marketing services. We will
                only share your information with third parties when necessary
                and in compliance with applicable laws.
              </p>
            </div>
            <div className="mb-7">
              <p className="text-justify font-inter text-base font-light leading-7">
                We take steps to ensure the security of your personal
                information. We use secure servers and encrypt the transmission
                of your data. We also restrict access to your personal
                information to our employees, contractors, and agents who need
                to know that information in order to operate, develop, or
                improve our services.
              </p>
            </div>
            <div className="mb-7">
              <p className="text-justify font-inter text-base font-light leading-7">
                If you have any questions about our Privacy Policy,{' '}
                <a href={`mailTo:${shopEmailIndia}`}>
                  <span className="theme-heading">{shopEmailIndia}</span>
                </a>
              </p>
            </div>
          </div>
        </section>
      </FadeRight>
    </>
  )
}

export default PrivacyPolicy
