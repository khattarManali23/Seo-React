import { Grid } from '@mui/material'
// import React from 'react'
import { AppHeading } from '../basics'
// import sellOne from '../../assets/homeproduct.png'
// import selltwo from '../../assets/bestseller3.png'
// import toolsOne from '../../assets/tools.png'
// import toolsTwo from '../../assets/toolstwo.png'
// import toolsThree from '../../assets/spare.png'
import Image from 'next/image'

export default function BestSeller() {
  return (
    <section className="w-11/12 sm:container mx-auto">
      <div className="my-5">
        <AppHeading
          content={'Best selling'}
          title={'See all'}
          btnClick={'/p'}
        />
      </div>

      <Grid container>
        <Grid
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className="bg-[#30BFFE] shadow-md"
        >
          <div className="flex justify-center flex-col items-center text-center w-full">
            <Image
              height={220}
              width={220}
              alt="product page"
              className="transition-all duration-500  hover:scale-125"
              src={sellOne}
            />

            <div className="flex justify-center flex-col items-center text-center w-[250px] width_mobile_view">
              <h2 className="text-white text-[22px] font-[550] mb-1 tools_text_box">
                Powerful and Reliable
              </h2>
              <span className="text-white text-[14px] mb-[30px] text-center we_text_box">
                Powerful and reliable power tools for all your home improvement
                needs.
              </span>
            </div>
          </div>
        </Grid>

        <Grid
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          className="bg-white shadow-md"
        >
          <div className="flex justify-center flex-col items-center text-center w-full">
            <div
              style={{
                position: 'relative',
              }}
              className="transition-all duration-500  hover:scale-125"
            >
              <Image
                height={220}
                width={220}
                alt="product page"
                src={toolsTwo}
              />

              <div className="top-32 flex absolute">
                <Image
                  height={100}
                  width={100}
                  alt="product page"
                  src={toolsThree}
                />
                <Image
                  height={100}
                  width={100}
                  alt="product page"
                  src={toolsOne}
                />
              </div>
            </div>

            <h2 className="text-home-content text-xl font-medium mb-5">
              Best Reviewed
              <br />
              Products
            </h2>
          </div>
        </Grid>

        <Grid
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          className="bg-pink shadow-md"
        >
          <div className="flex justify-center flex-col items-center text-center w-full">
            <div className="flex justify-center flex-col items-center text-center w-60 mb-2">
              <span className="text-home-content text-sm mt-7 mb-3 text-center ">
                Empower with Precision and Performance
              </span>
              <h2 className="text-home-content text-[22px] font-[550] mb-1 tools_text_box">
                Trusted & Assured Products of Robot Power Tools
              </h2>
            </div>
            <Image
              height={130}
              width={300}
              className="object-contain transform duration-300 hover:scale-125"
              alt="product page"
              src={selltwo}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  )
}
