import Head from "next/head";
import Image from "next/image";
// import React from 'react'
import Link from "next/link";
import { HomePage } from "../../components/home";
import { AppData } from "../../data/app-data";
import api from "../services/api";
import whatsappIcon from "../assets/hercoPowerImages/svg/whatsappIcon.svg";
// import GlobalSEO from '../data/next-seo.data'

export default function Home({
  categories,
  banners,
  blogs,
  testimonials,
  clients,
  products,
}) {
  const telNumberIndia = AppData?.webSiteData?.shopContactNoIndia
    ?.split("/")[0]
    ?.replace("-", "");
  console.log("bannresss", categories);
  return (
    <>
      <Head>
        <link rel="icon" href="/herco fav.png" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
        {/* Chrome, Firefox OS and Opera */}

        <meta name="theme-color" content="#030143" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#030143" />
        {/* <!-- iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#030143" />
      </Head>

      <section className="relative">
        <div>
          <HomePage
            categories={categories}
            banners={banners}
            products={products}
            testimonials={testimonials}
            blogs={blogs}
            clients={clients}
            telNumberIndia={telNumberIndia}
          />
          {/* whatsapp redirect */}
          <div className="fixed bottom-3 right-3 z-10 h-24 w-24 rounded-full sm:bottom-5 sm:right-5">
            <div className="h-full w-full">
              <Link href={`https://wa.me/${telNumberIndia}`} legacyBehavior>
                <a target="_blank" rel="noreferrer">
                  <Image fill src={whatsappIcon} alt="whatsapp" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const categoryRes = await api.get("/category/list");
  const bannerRes = await api.get("/banner/list");
  // const blogsRes = await api.get('/blog/all')
  // const clientsRes = await api.get('/client/all')
  // const testimonialsRes = await api.get('/testimonials/all')
  // const productsRes = await api.get('/product/all')
  const banners = bannerRes.data;
  const categories = categoryRes.data;
  // const blogs = blogsRes.data
  // const testimonials = testimonialsRes.data
  // const products = productsRes.data
  // const clients = clientsRes.data
  return {
    props: {
      categories,
      banners,
      // blogs,
      // testimonials,
      // products,
      // clients,
    },
  };
}
