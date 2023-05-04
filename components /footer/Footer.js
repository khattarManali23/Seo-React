// import React from 'react'
import { useGetAllCategories } from "../../services/categoryServices";
import DesktopFooter from "./DesktopFooter";
import MobileWebFooter from "./MobileWebFooter";
export const Footer = () => {
  // const { data: categories } = useGetAllCategories()
  const categories = [];
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <DesktopFooter categories={categories} />
      </div>
      <div className="md:hidden">
        <MobileWebFooter />
      </div>
    </div>
  );
};
