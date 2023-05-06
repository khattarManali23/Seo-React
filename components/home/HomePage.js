// import React from 'react'
import { useSelector } from "react-redux";
// import { useGetAllBanners } from 'services/bannerServices'
// import LoadingScreen from '../basics/LoadingScreen'
import { ErrorScreen } from "../basics";
import Bannerpage from "./Bannerpage";
import PoppupModal from "./PoppupModal";
// import { FadeIn } from '../animate'
// import { AboutUsPage } from '../aboutAs'
import dynamic from "next/dynamic";
import Image from "next/image";
import whatsappIcon from "../../assets/hercoPowerImages/svg/whatsappIcon.svg";

// dynamic imports
// const DynamicAboutUsPage = dynamic(
//   () => import('../aboutAs').then((c) => c.AboutUsPage)
// )
const DynamicHomePageCategories = dynamic(
  () => import("./HomePageCategories")
  // {
  //   loading: () => <p>Loading...</p>,
  // }
);
const DynamicHomeProductPage = dynamic(
  () => import("../product").then((c) => c.HomeProductPage)
  // {
  //   loading: () => <p>Loading...</p>,
  // }
);
const DynamicTestimonialOne = dynamic(
  () => import("../testimonials").then((c) => c.TestimonialOne)
  // {
  //   loading: () => <p>Loading...</p>,
  // }
);
const DynamicHomePageBlogs = dynamic(() => import("./HomePageBlogs"), {
  // loading: () => <p>Loading...</p>,
});
const DynamicOurClients = dynamic(
  () => import("../testimonials").then((c) => c.OurClients)
  // {
  //   loading: () => <p>Loading...</p>,
  // }
);
export default function HomePage({
  telNumberIndia,
  categories,
  banners,
  blogs,
  testimonials,
  clients,
  products,
}) {
  const { userType, userData } = useSelector((state) => state.user);

  // const {
  //   data: banners,
  //   isLoading: bannersLoading,
  //   isError: bannersError,
  // } = useGetAllBanners()

  // if (bannersLoading) return <LoadingScreen />

  if (
    !banners?.status ||
    // !clients?.status ||
    // !blogs?.status ||
    // !products?.status ||
    // !testimonials?.status ||
    !categories?.status
  )
    return <ErrorScreen />;
  console.log("banner", banners);

  return (
    <div className="">
      <PoppupModal banners={banners?.data} />
      {/* <FadeIn durationTime="0.5s"> */}
      <div className="custom-max-screen:hidden">
        <Bannerpage banners={banners?.data} />
      </div>
      <DynamicHomePageCategories categories={categories?.data} />
      {/* </FadeIn> */}
      {/* <FadeIn durationTime="0.5s">
        <AboutUsPage />
      </FadeIn>
      <DynamicHomeProductPage
        userType={userType}
        userData={userData}
        categories={categories?.categorys}
        products={products?.product}
      />
      <DynamicTestimonialOne testimonials={testimonials?.testimonials} />
      <DynamicHomePageBlogs blogs={blogs?.blog} />
      <DynamicOurClients clients={clients?.data} /> */}
      {/* whatsapp redirect */}
      <div className="fixed bottom-3 sm:bottom-5 right-3 sm:right-5 z-10 w-24 h-24 rounded-full">
        <div className="h-full w-full">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${telNumberIndia}`}
          >
            <Image fill src={whatsappIcon} alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}
