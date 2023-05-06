// import React from 'react'
import { MainAboutPage } from "components/aboutAs";
import { DefaultSeo, LogoJsonLd } from "next-seo";
import Head from "next/head";
import { FadeRight } from "../components/animate";
import GlobalSEO, { SITE_LOGO, SITE_URL } from "../data/next-seo.data";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="My Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://example.com/my-page" />
        <meta property="og:title" content="My Page Title" />
        <meta
          property="og:description"
          content="This is a description of my page"
        />
        <meta property="og:image" content="https://example.com/my-image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Page Title" />
        <meta
          name="twitter:description"
          content="This is a description of my page"
        />
        <meta name="twitter:image" content="https://example.com/my-image.jpg" />
      </Head>
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
