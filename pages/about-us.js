// import React from 'react'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { FadeRight } from 'src/components/animate'
import GlobalSEO, { SITE_LOGO, SITE_URL } from 'src/data/next-seo.data'
import { MainAboutPage } from '../components/aboutAs'

const AboutUs = () => {
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/about-us']} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={'1s'}>
        <MainAboutPage />
      </FadeRight>
    </>
  )
}

export default AboutUs

// export async function getStaticProps() {
//   const data = '/about-us'

//   return {
//     props: data,
//   }
// }
