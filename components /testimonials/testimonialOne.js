import TestimonialsSlider from './TestimonialsSlider'

export default function TestimonialOne({testimonials}) {
  // const {
  //   data: testimonials,
  //   isLoading: testimonialsLoading,
  //   isError: testimonialsError,
  // } = useGetAllTestimonials()
  // if (testimonialsLoading) return <LoadingScreen />

  // if (testimonialsError) return <ErrorScreen />
  return (
    <div className="my-7 md:my-14">
      <div className="hidden pt-5 sm:block">
        <svg
          width="230"
          height="53"
          viewBox="0 0 230 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M194.7 17.7349C194.7 15.9676 193.267 14.5349 191.5 14.5349C189.733 14.5349 188.3 15.9676 188.3 17.7349C188.3 19.5022 189.733 20.9349 191.5 20.9349C193.267 20.9349 194.7 19.5022 194.7 17.7349ZM95 17.7349L94.5659 18.149C94.6791 18.2677 94.836 18.3349 95 18.3349L95 17.7349ZM80.6902 2.73486L81.1243 2.3207C81.0111 2.20202 80.8542 2.13486 80.6902 2.13486L80.6902 2.73486ZM1 2.13487L0.399997 2.13487L0.399996 3.33487L1 3.33487L1 2.13487ZM191.5 17.1349L95 17.1349L95 18.3349L191.5 18.3349L191.5 17.1349ZM95.4341 17.3207L81.1243 2.3207L80.256 3.14902L94.5659 18.149L95.4341 17.3207ZM80.6902 2.13486L1 2.13487L1 3.33487L80.6901 3.33486L80.6902 2.13486Z"
            fill="url(#paint0_linear_437_9364)"
          />
          <path
            d="M129.133 29.7349C129.133 28.5567 128.178 27.6015 127 27.6015C125.822 27.6015 124.867 28.5567 124.867 29.7349C124.867 30.9131 125.822 31.8682 127 31.8682C128.178 31.8682 129.133 30.9131 129.133 29.7349ZM90 29.7349L89.713 30.0135C89.7883 30.0911 89.8918 30.1349 90 30.1349L90 29.7349ZM73.5 12.7349L73.787 12.4563C73.7117 12.3787 73.6082 12.3349 73.5 12.3349L73.5 12.7349ZM1 12.3349C0.779086 12.3349 0.600002 12.514 0.600001 12.7349C0.600001 12.9558 0.779086 13.1349 1 13.1349L1 12.3349ZM127 29.3349L90 29.3349L90 30.1349L127 30.1349L127 29.3349ZM90.287 29.4563L73.787 12.4563L73.213 13.0135L89.713 30.0135L90.287 29.4563ZM73.5 12.3349L1 12.3349L1 13.1349L73.5 13.1349L73.5 12.3349Z"
            fill="#575FF0"
          />
          <defs>
            <linearGradient
              id="paint0_linear_437_9364"
              x1="-2.49898"
              y1="10.2349"
              x2="197.526"
              y2="10.2349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0095ED" />
              <stop offset="1" stop-color="#151ECF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto w-full sm:w-w-main">
        <div>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </div>
    </div>
  )
}
