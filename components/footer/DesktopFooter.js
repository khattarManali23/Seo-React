// import React from 'react'
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../assets/hercoPowerImages/logo.png";
import { BsBuilding, BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { AppData, AppSocialLinks } from "../../data/app-data";
import { FOOTER_LINKS_HERCO } from "../../data/app-data-links";

const DesktopFooter = ({ categories }) => {
  const {
    shopAddressIndia,
    shopContactNoIndia,
    shopEmailIndia,
    shopAddressUS,
  } = AppData?.webSiteData;
  const { faceBook, insta, twitter } = AppSocialLinks?.socialLinksData;
  const telNumberIndia = shopContactNoIndia?.split("/")[0]?.replace("-", "");
  return (
    <footer className=" w-full items-center justify-center bg-shade-blue">
      <div className="mx-auto w-w-main">
        <div className="grid py-10 lg:grid-cols-12">
          <div className="lg:col-span-3 xl:col-span-5">
            <div className="mt-8 pr-3">
              <Link href={"/"}>
                <div className="flex justify-start">
                  <Image
                    alt="footer-img"
                    src={logoImage}
                    height={50}
                    width={140}
                  />
                </div>
              </Link>
              <div className="mt-5 pr-5 text-justify">
                <p className="my-7 mt-2 max-w-xs text-sm font-normal leading-6 text-white opacity-80">
                  HERCO, living up to its 65 year old tradition and reputation
                  has been developing better products through innovation and
                  better process management.
                </p>
              </div>

              <div className="mt-10 flex">
                <a target="_blank" rel="noreferrer" href={`${insta}`}>
                  <span className="mr-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-light-shade-blue text-sm">
                    <RiInstagramFill className="text-xl text-light-blue " />
                  </span>
                </a>
                <a target="_blank" rel="noreferrer" href={`${faceBook}`}>
                  <span className="mr-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-light-shade-blue text-sm">
                    <BsFacebook className="text-xl text-light-blue " />
                  </span>
                </a>
                <a target="_blank" rel="noreferrer" href={`${twitter}`}>
                  <span className="mr-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-light-shade-blue text-sm">
                    <AiOutlineTwitter className="text-xl text-light-blue " />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full md:space-x-10 lg:space-x-10 xl:space-x-20 lg:col-span-9 xl:col-span-7">
            <div className="">
              <h5 className="text-xl font-black text-white">HOME</h5>
              {FOOTER_LINKS_HERCO?.map((item, index) => {
                return (
                  <div className="mt-2" key={index}>
                    <Link href={item?.link}>
                      <p className="my-7 mt-2 text-sm font-normal capitalize text-white opacity-80 hover:cursor-pointer">
                        {item?.name}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="">
              <h5 className="text-xl font-black text-white">PRODUCTS</h5>
              {categories?.slice(0, 5)?.map((item, index) => {
                return (
                  <div className="mt-2" key={index}>
                    <Link
                      href="/categories/[categorySlug]"
                      as={`/categories/${item?.slug}`}
                    >
                      <p className=" my-7 mt-2 overflow-hidden text-sm font-normal text-white opacity-80 hover:cursor-pointer">
                        {item?.name}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="">
              <h5 className="text-xl font-black text-white">GET IN TOUCH</h5>
              <div className="mt-2">
                <a href={`tel:${telNumberIndia}`}>
                  <p className="mt-1 mb-7 flex items-center text-sm font-normal  hover:text-theme-primary-main">
                    <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-light-shade-blue text-sm">
                      <IoMdCall className="text-xl text-light-blue" />
                    </span>
                    <span className=" w-80 text-white  opacity-80">
                      <span className="mb-2 block font-light">
                        Phone Number
                      </span>
                      <span className="text-sm">{shopContactNoIndia}</span>
                    </span>
                  </p>
                </a>
                <a href={`mailTo:${shopEmailIndia}`}>
                  <p className=" mb-7  flex items-start text-sm font-normal">
                    <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-light-shade-blue text-sm">
                      <MdMailOutline className="text-xl text-light-blue" />
                    </span>
                    <span className=" w-80 text-white   opacity-80">
                      <span className="mb-2 block font-light">
                        Email Address
                      </span>
                      <span className="text-sm">{shopEmailIndia}</span>
                    </span>
                  </p>
                </a>
                <p className=" flex  items-start text-sm font-normal ">
                  <span className=" mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-light-shade-blue text-sm">
                    <BsBuilding className="text-xl text-light-blue" />
                  </span>
                  <span className=" w-80 text-white opacity-80">
                    <span className="mb-2 block font-light">
                      Office Address
                    </span>
                    <span className="text-sm">{shopAddressIndia}</span>
                  </span>
                </p>
                <p className=" ml-[3.2rem]  flex items-start text-sm font-normal">
                  <span className=" w-80 text-white   opacity-80">
                    <span className="text-sm">{shopAddressUS}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="" />
      </div>
      <div className="w-full bg-[#01002F]">
        <div className="mx-auto flex w-w-main justify-between bg-[#01002F]">
          <p className=" capitalize text-white opacity-80">
            <span className=" font-inter   text-xs font-normal">
              © 2023 Herco transformers limited
            </span>
          </p>
          <p className="flex items-center justify-center font-inter text-xs capitalize text-white opacity-80">
            <span> Powered By&nbsp;</span>{" "}
            <span className="text-[#ffdc63]">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.technolitics.com/"
              >
                Technolitics
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
