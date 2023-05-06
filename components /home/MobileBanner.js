import Image from "next/image";
// import React from 'react'
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import errow from "../../assets/hercoPowerImages/errowImg.png";
import bgBannerImage from "../../assets/hercoPowerImages/png/MobileView.png";
import { FadeIn } from "../animate";
import { AppButton, AppCarousel } from "../basics";

export default function MobileBanner({
  homeBanner,
  settings,
  ImageIcon,
  shopContactNoIndia,
  shopEmailIndia,
  telNumberIndia,
}) {
  return (
    <div className="relative h-72">
      <div
        style={{
          background: `url("${bgBannerImage?.src}")`,
          backgroundSize: "100% 100%",
        }}
        className="absolute h-full w-screen  top-0 left-0"
      />
      <div className="w-full h-full grid grid-cols-2 gap-5 px-1 m-auto p-auto pt-20">
        <div className="w-[150px] h-fit pt-5 pl-[4vw]">
          <FadeIn durationTime="1s">
            <AppCarousel {...settings}>
              <div className="h-16 pt-2 overflow-hidden relative ">
                <div className="font-raleway uppercase h-full overflow-hidden">
                  <div
                    className={`text-white font-black w-full h-[23px] flex pt-auto items-center justify-between overflow-hidden m-0 text-[22px]`}
                  >
                    {`power`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}
                    &nbsp;{" "}
                    <span className="absolute -top-0 z-1 right-7">
                      {" "}
                      <Image
                        loading="lazy"
                        src={ImageIcon}
                        height={20}
                        width={20}
                        alt="edveg"
                      />
                    </span>{" "}
                    &nbsp;
                    {`up`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}{" "}
                  </div>

                  <div
                    className={`text-white text-sm font-black h-[17px] flex items-start justify-between overflow-hidden m-0 `}
                  >
                    {`business`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}{" "}
                    &nbsp;
                    {`with`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}
                  </div>

                  <div
                    className={`text-golden text-[8px] font-black h-[10px] m-0 
                             flex justify-between
                                `}
                  >
                    {`herco`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}{" "}
                    &nbsp;
                    {`transformers.`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-16 overflow-hidden">
                <div className="font-raleway uppercase h-full overflow-hidden">
                  <div
                    className={`text-white  font-black w-full h-[23px] flex items-center justify-between overflow-hidden m-0 text-[22px]`}
                  >
                    {`unleash`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}{" "}
                  </div>

                  <div
                    className={`text-white text-sm font-black h-[17px] flex justify-between overflow-hidden m-0 `}
                  >
                    {`your`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}{" "}
                    &nbsp;
                    {`power`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}
                  </div>
                  <div
                    className={`text-golden text-xs font-black h-[10px] m-0 
                             flex justify-between
                                `}
                  >
                    {`performance`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}{" "}
                  </div>
                </div>
              </div>
              <div className="h-16 overflow-hidden">
                <div className="font-raleway uppercase h-full overflow-hidden">
                  <div
                    className={`text-white font-black w-full h-[20px] flex items-center justify-between overflow-hidden m-0 text-sm`}
                  >
                    {`transforming`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}
                  </div>

                  <div
                    className={`text-white text-sm font-black h-[17px] flex justify-between overflow-hidden m-0 `}
                  >
                    {`power`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}{" "}
                    &nbsp;
                    {`with`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}
                  </div>

                  <div
                    className={`text-golden text-xs font-black h-[10px] m-0 
                             flex justify-between
                                `}
                  >
                    {`passion`?.split("")?.map((letter) => (
                      <span key={letter}>{letter}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AppCarousel>

            <div className="flex items-center w-full">
              <div>
                <Link href="/contact-us">
                  <AppButton
                    variant="contained"
                    size="small"
                    title={"Enquire now"}
                  />
                </Link>
                <Image
                  loading="lazy"
                  width={33}
                  height={16}
                  src={errow}
                  className=" object-cover  ml-16 animate-opacityAnimation"
                  style={{ transform: "matrix(0.53, 0.85, 0.85, -0.53, 0, 0)" }}
                  alt="arrow"
                />
              </div>
              <div></div>
            </div>
          </FadeIn>
        </div>
        {/* image carousel  */}

        {homeBanner?.length > 0 && (
          <div className="w-9/12 mx-auto bg-golden rounded-full aspect-square relative">
            <div className="w-full mx-auto my-auto bg-white rounded-full aspect-square absolute top-2 right-2 flex">
              <div className="w-5/5 my-auto mx-auto aspect-square overflow-hidden">
                <AppCarousel
                  {...{
                    slidesToShow: 1,
                    fade: false,
                    autoplay: true,
                    infinite: homeBanner?.length > 1 ? true : false,
                    autoplaySpeed: 3000,
                    speed: 300,
                  }}
                >
                  {homeBanner?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="setImg w-fit mx-auto aspect-square h-full p-5"
                      >
                        <div className="w-11/12 aspect-square relative animate-opacityAnimation transition-all duration-1000">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={item?.hyperLink}
                          >
                            <FadeIn durationTime="1s">
                              <Image
                                fill
                                src={item?.bannerImage}
                                className="object-cover w-full h-full animate-opacityAnimation transition-all duration-1000"
                                alt={item?.title}
                              />
                            </FadeIn>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </AppCarousel>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="enquiry-mobile absolute bottom-1 left-[4rem] border border-light-border-blue rounded-custom-14 p-2">
        <div>
          <a href={`tel:${telNumberIndia}`} target="_blank" rel="noreferrer">
            <span className=" flex items-center hover:text-theme-primary-main text-[10px] font-normal">
              <IoMdCall className="mr-1 text-white  text-[10px]" />{" "}
              <span className=" text-white capitalize">
                {" "}
                {shopContactNoIndia}
              </span>
            </span>
          </a>
          <a href={`mailto:${shopEmailIndia}`} target="_blank" rel="noreferrer">
            <span className=" flex items-center hover:text-theme-primary-main text-[10px] font-normal mt-[2px]">
              <MdMailOutline className="mr-1 text-white text-[10px]" />{" "}
              <span className=" text-white"> {shopEmailIndia}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
