import { useRouter } from "next/router";
// import React from 'react'
import { useGetAllBanners } from "../../services/bannerServices";
import { Footer } from "../footer/Footer";
import { Bannerpage } from "../home";
import Navbar from "../navbar/Navbar";

function NavbarFooterLayout({ children }) {
  const { pathname } = useRouter();
  const banners = [];
  const bannersLoading = false;
  const bannersError = false;

  // const {
  //   data: banners,
  //   isLoading: bannersLoading,
  //   isError: bannersError,
  // } = useGetAllBanners()
  // console.log('banners', banners)

  if (bannersLoading) return <div />;

  if (bannersError) return <div>error</div>;
  return (
    <section className="">
      <div className="fixed top-0 z-20 w-screen">
        <Navbar />
      </div>
      {pathname === "/" && (
        <div className="h-screen w-screen hidden custom-max-screen:block">
          <Bannerpage banners={banners} />
        </div>
      )}
      <div
        className={`min-h-screen w-screen md:mx-auto custom-max-screen:max-w-7xl ${
          pathname !== "/" && "mt-20 md:mt-28"
        }`}
      >
        {children}
      </div>
      <Footer />
    </section>
  );
}

export default NavbarFooterLayout;
