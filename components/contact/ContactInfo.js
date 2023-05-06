import Image from "next/image";
// import React from 'react'
import { AppData } from "../../data/app-data";
import svgIcon from "../../assets/hercoPowerImages/svg/united-states-flag-icon.svg";
import nationalFlag from "../../assets/hercoPowerImages/svg/Flag_of_India.svg";
function ContactInfo() {
  const {
    shopAddressIndia,
    shopAddressUS,
    shopContactNoIndia,
    shopContactNoUS,
    shopEmailIndia,
    shopEmailUS,
  } = AppData?.webSiteData;
  // const BG_GRADIENT = 'linear-gradient(270deg, #0095ed -1.84%, #151ecf 103.16%)'
  return (
    <div>
      <div className="grid w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2 ">
        <div className="flex h-full w-full justify-between rounded-lg transition-all duration-500">
          {/* <div
            className="box-border flex h-16 w-16 items-center justify-center rounded-full text-white"
            style={{ background: BG_GRADIENT }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.734863" width="21" height="10" fill="#DE5D00" />
              <rect y="4.73486" width="21" height="10" fill="#EEEEEE" />
              <rect y="8.73486" width="21" height="10" fill="#038A00" />
            </svg>
          </div> */}
          <div className="box-border w-[75%]">
            <div className="flex gap-x-3">
              <div className="my-1">
                {" "}
                <Image
                  alt="jifjijf"
                  height={16}
                  width={20}
                  src={nationalFlag}
                />
              </div>
              <p className="m-0 font-inter text-lg font-bold md:text-2xl">
                India
              </p>
            </div>
            <p className="m-0 mt-3 text-left font-inter text-sm capitalize sm:text-base">
              {shopAddressIndia}
            </p>
            <a href={`mailTo:${shopEmailIndia}`}>
              <p className="m-0 mt-3 text-left font-inter text-sm capitalize sm:text-base">
                {shopEmailIndia}
              </p>
            </a>
            <a href={`tel:${shopContactNoIndia}`}>
              <p className="m-0 mt-3 text-left font-inter text-sm capitalize sm:text-base">
                {shopContactNoIndia}
              </p>
            </a>
          </div>
        </div>
        <div className="flex h-full w-full justify-between rounded-lg transition-all duration-500">
          {/* <div
            className="box-border flex h-16 w-16 items-center justify-center rounded-full text-white"
            style={{ background: BG_GRADIENT }}
          >
            <div className="text-center text-3xl">
              <Image alt="jifjijf" height={16} width={20} src={svgIcon} />
            </div>
          </div> */}
          <div className="box-border w-[75%]">
            <div className="flex gap-x-3">
              <div className="mt-1">
                {" "}
                <Image alt="jifjijf" height={16} width={20} src={svgIcon} />
              </div>
              <p className="m-0 font-inter text-lg font-bold md:text-2xl">
                United States
              </p>
            </div>
            <p className="m-0 mt-3 text-left font-inter text-sm capitalize sm:text-base">
              {shopAddressUS}
            </p>
            <a href={`mailTo:${shopEmailUS}`}>
              <p className="m-0 mt-3 text-left font-inter text-sm capitalize sm:text-base">
                {shopEmailUS}
              </p>
            </a>
            <a href={`tel:${shopContactNoUS}`}>
              <p className="m-0 mt-3 text-left font-inter text-sm capitalize sm:text-base">
                {shopContactNoUS}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
