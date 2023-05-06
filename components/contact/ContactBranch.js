import Image from 'next/image'
import { Fragment } from 'react'
import { AppButton } from '../basics'

function ContactInfo() {
  const branchData = [
    {
      _id: 1,
      state: 'Raipur Office',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTby3l4tyjyAdg7tIf1dBdFv610FoxMGXqVQ&usqp=CAU',
      emailId: 'shubham_power_tools@yahoo.com',
      contactNo: '9827177599',
      mapLink: 'https://goo.gl/maps/nMm3jFBCHBEzmi8B8',
    },
  ]
  return (
    <div>
      <div className="my-10">
        <h1 className="text-center text-lg font-medium capitalize md:text-3xl">
          Locations
        </h1>
        <p className="mt-2 text-center text-xl md:text-sm">
          Come and visit our offices in Chattisgarh
        </p>
      </div>
      <div className=" mx-auto grid w-full grid-cols-1 items-center justify-center gap-8 sm:w-10/12 md:grid-cols-12">
        {branchData?.map((item, i) => {
          return (
            <Fragment key={i}>
              <div className=" md:col-span-3">
                <h3 className="text-center text-base font-medium md:text-left md:text-base">
                  {item?.state}
                </h3>
              </div>
              <div className=" flex items-center justify-center md:col-span-2">
                <div className="w-[30%] animate-opacityAnimation md:w-[70%]">
                  <Image
                    height={120}
                    width={120}
                    loading="lazy"
                    src={item?.image}
                    alt="contact img"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-4">
                <p className="text-center text-sm text-home-content md:text-left md:text-base">
                  <a
                    target={'_blank'}
                    rel="noreferrer"
                    href={`mailto:${item?.emailId}`}
                  >
                    {item?.emailId}
                  </a>
                </p>
                <p className="mt-1 text-center text-sm tracking-[.02em] text-[#525258] hover:text-theme-primary-main md:text-left md:text-base">
                  <a
                    target={'_blank'}
                    rel="noreferrer"
                    href={`tel:${item?.contactNo}`}
                  >
                    {item?.contactNo}
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-center md:col-span-3">
                <a
                  target={'_blank'}
                  rel="noreferrer"
                  href={item?.mapLink}
                  className="w-fit"
                >
                  <AppButton
                    type="button"
                    variant="contained"
                    title=" View Locatio"
                    fullWidth
                  />
                </a>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default ContactInfo
