import { Grid } from '@mui/material'
// import React from 'react'
import { AppHeading } from '../basics'
import categorieImG from '../../assets/images/Frame.jpg'
import Image from 'next/image'
import { ProductsCard } from '../cards'

export default function HomeCategoriesPage({ data, userData, userType }) {
  return (
    <div>
      <section className="w-11/12 sm:container mx-auto">
        <div className="my-5">
          <AppHeading
            content={'Our Products'}
            title={'See all'}
            btnClick={'/p'}
          />
        </div>

        <Grid container>
          <Grid
            xxl={9}
            xl={9}
            lg={9}
            md={8}
            sm={8}
            xs={12}
            className="bg-white"
          >
            <div className="my-5 w-full mx-auto px-5">
              <ProductsCard
                data={data}
                cardDisplayIn={'home'}
                userData={userData}
                userType={userType}
                redirectUrl={'/p'}
                // redirectPath="/categories/[categorySlug]"
                // redirectUrl={`/categories`}
              />
            </div>
          </Grid>

          <Grid xxl={3} xl={3} lg={3} md={4} sm={4} xs={12}>
            <div className="md:block hidden h-full">
              <div className="w-full relative h-full overflow-hidden">
                <Image
                  // height={720}
                  // width={200}
                  fill
                  alt="categories"
                  src={categorieImG}
                  className="overflow-hidden  hover:scale-125 w-full  object-cover transition-all duration-500"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}
