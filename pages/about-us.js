// import React from 'react'
import { MainAboutPage } from "components/aboutAs";
import { DefaultSeo, LogoJsonLd } from "next-seo";
import { FadeRight } from "../components/animate";
import GlobalSEO, { SITE_LOGO, SITE_URL } from "../data/next-seo.data";

const AboutUs = () => {
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO["/about-us"]} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={"1s"}>
        <MainAboutPage />
      </FadeRight>
    </>
  );
};

export default AboutUs;

// export async function getStaticProps() {
//   const data = '/about-us'

//   return {
//     props: data,
//   }
// }
