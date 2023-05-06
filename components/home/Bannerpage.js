import { Grid } from "@mui/material";
import Aos from "aos";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { AppData } from "../../data/app-data";
import errow from "../../assets/hercoPowerImages/errowImg.png";
import bgBannerImage from "../../assets/hercoPowerImages/png/LaptopView.png";
import ImageIcon from "../../assets/hercoPowerImages/svg/powerup.svg";
import { FadeIn } from "../animate";
import { AppButton, AppCarousel } from "../basics";
import MobileBanner from "./MobileBanner";

export default function Bannerpage({ banners }) {
  const { push } = useRouter();
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { shopContactNoIndia, shopEmailIndia } = AppData?.webSiteData;

  const telNumberIndia = shopContactNoIndia?.split("/")[0]?.replace("-", "");
  const [homeBanner, setHomeBanner] = useState([]);
  const settings = {
    slidesToShow: 1,
    fade: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
  };
  useEffect(() => {
    const newPop = banners?.filter((item) => item?.type === "Home Banner");
    setHomeBanner(newPop);
  }, [banners]);

  return (
    <div className="relative  sm:pt-8 pt-0   border-6 border-red-900">
      {homeBanner.map((item, index) => (
        <img
          key={index}
          src={item?.bannerImage}
          alt={item?.title}
          data-aos="zoom-out-up"
          className="w-full h-full"
        />
      ))}
    </div>
  );
}
