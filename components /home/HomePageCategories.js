// import React from 'react'
import { AppCarousel, AppHeading } from '../basics'
import { CategoryCard } from '../cards/CategoriesCard'

export default function HomePageCategories({ categories }) {
  // const {
  //   data: categories,
  //   isLoading: categoriesLoading,
  //   isError: categoriesError,
  // } = useGetAllCategories()
  const settings = {
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 500,
    infinite: categories?.length >= 3 ? true : false,
    speed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  // if (categoriesError) return <ErrorScreen />

  return (
    <section className="relative">
      <div className="w-full sm:w-w-main mx-auto">
        <div>
          <div className="sm:block hidden absolute left-0 top-20">
            <svg
              width="104"
              height="46"
              viewBox="0 0 104 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.1333 25.7349C86.1333 24.5567 85.1782 23.6015 84 23.6015C82.8218 23.6015 81.8667 24.5567 81.8667 25.7349C81.8667 26.9131 82.8218 27.8682 84 27.8682C85.1782 27.8682 86.1333 26.9131 86.1333 25.7349ZM30.4516 25.7349L30.3011 26.1055C30.3489 26.1249 30.4 26.1349 30.4516 26.1349L30.4516 25.7349ZM18.1355 20.7349L18.2859 20.3642C18.2382 20.3448 18.1871 20.3349 18.1355 20.3349L18.1355 20.7349ZM0.999994 20.3349C0.779085 20.3349 0.6 20.5139 0.6 20.7349C0.6 20.9558 0.779084 21.1349 0.999994 21.1349L0.999994 20.3349ZM84 25.3349L30.4516 25.3349L30.4516 26.1349L84 26.1349L84 25.3349ZM30.6021 25.3642L18.2859 20.3642L17.985 21.1055L30.3011 26.1055L30.6021 25.3642ZM18.1355 20.3349L0.999994 20.3349L0.999994 21.1349L18.1355 21.1349L18.1355 20.3349Z"
                fill="#575FF0"
              />
              <path
                d="M48.6667 35.7349C48.6667 34.2621 47.4728 33.0682 46 33.0682C44.5272 33.0682 43.3333 34.2621 43.3333 35.7349C43.3333 37.2076 44.5272 38.4015 46 38.4015C47.4728 38.4015 48.6667 37.2076 48.6667 35.7349ZM23.6901 35.7349L23.3122 36.0622C23.4072 36.1719 23.5451 36.2349 23.6901 36.2349L23.6901 35.7349ZM18.493 29.7349L18.8709 29.4075C18.7759 29.2979 18.638 29.2349 18.493 29.2349L18.493 29.7349ZM1.00001 29.2349L0.500006 29.2349L0.500005 30.2349L1.00001 30.2349L1.00001 29.2349ZM46 35.2349L23.6901 35.2349L23.6901 36.2349L46 36.2349L46 35.2349ZM24.0681 35.4075L18.8709 29.4075L18.115 30.0622L23.3122 36.0622L24.0681 35.4075ZM18.493 29.2349L1.00001 29.2349L1.00001 30.2349L18.493 30.2349L18.493 29.2349Z"
                fill="url(#paint0_linear_437_9383)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_437_9383"
                  x1="0.17347"
                  y1="32.7349"
                  x2="47.4235"
                  y2="32.7349"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0095ED" />
                  <stop offset="1" stop-color="#151ECF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <AppHeading
            title={'Product Categories'}
            content={
              'Find What You&apos;re Looking For with Our Diverse Product Categories'
            }
          />
        </div>
        {/* laptop view */}
        <div className="md:block hidden w-full mx-auto bg-white px-2">
          <AppCarousel {...settings}>
            {categories?.map((item) => {
              return (
                <div key={item?._id} className="p-1 md:p-6">
                  <CategoryCard
                    item={item}
                    redirectPath="/categories/[categorySlug]"
                    redirectUrl={`/categories`}
                  />
                </div>
              )
            })}
          </AppCarousel>
        </div>
        {/* mobile view */}
        <div className="md:hidden w-full mx-auto bg-white px-2">
          <div className="scrolll">
            <div className="ml-[2vw] w-full grid grid-rows-1 grid-flow-col gap-2 py-2">
              {categories?.map((item) => {
                return (
                  <div
                    key={item?._id}
                    className="p-1 md:p-6 aspect-square w-[44vw]"
                  >
                    <CategoryCard
                      item={item}
                      redirectPath="/categories/[categorySlug]"
                      redirectUrl={`/categories`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
