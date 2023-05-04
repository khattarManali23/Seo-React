import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDeviceType from "../../custom-hooks/useDeviceType";
import bgImg from "../../assets/hercoPowerImages/png/jjjjjj7772sq.png";
import { AppButton } from "../basics";

const CategoriesCard = ({
  data,
  redirectUrl,
  isLoadingCategories,
  redirectPath,
}) => {
  return (
    <>
      <div className=" grid grid-cols-2 justify-center gap-3 p-0 sm:grid-cols-3 sm:gap-10 sm:p-0 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((item) => {
          return (
            <CategoryCard
              key={item?._id}
              item={item}
              redirectUrl={redirectUrl}
              redirectPath={redirectPath}
              isLoading={isLoadingCategories}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoriesCard;

export function CategoryCard({ item, redirectUrl, redirectPath }) {
  console.log("item", item);
  const { icon, name, slug } = item || {};
  const { isMobile } = useDeviceType();
  const [pageLoading, setPageLoading] = useState(true);
  const [finalUrl, setFinalUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
    let lastSlug = redirectUrl?.split("/")?.pop();
    if (Number(lastSlug[0]) === 0) {
      setFinalUrl(
        redirectUrl?.split("/")?.slice(0, -1)?.join("/") +
          `/${
            item?.subCategorySlug ? item?.subCategorySlug : item?.categorySlug
          }`
      );
    } else {
      setFinalUrl(redirectUrl);
    }
  }, [redirectUrl, item]);
  return (
    <>
      <Link href={redirectPath} as={`${finalUrl}/${item.slug}`}>
        {pageLoading ? (
          <Skeleton
            variant="rectangular"
            height={"100%"}
            className="relative aspect-square w-full animate-opacityAnimation rounded-md sm:w-full "
          />
        ) : (
          <div className="relative aspect-square w-full animate-opacityAnimation rounded-md sm:w-full">
            <Image
              fill
              src={bgImg}
              alt={name}
              className="h-full w-full overflow-hidden  object-cover"
            />

            <div className="animate-opacityAnimation absolute bottom-2 right-7 flex aspect-square  w-7/12  justify-center overflow-hidden sm:bottom-5 sm:right-5 sm:w-8/12">
              <Image
                loading="eager"
                height={200}
                width={200}
                src={icon}
                alt={name}
                style={{ transition: "all 0.5s ease-in-out" }}
                className=" animate-opacityAnimation h-full w-full overflow-hidden object-cover transition-all duration-1000 hover:scale-[1.2] sm:ml-auto"
              />
            </div>

            <div className="absolute top-5 left-0 w-full md:top-5 md:left-4 md:w-fit">
              <h2 className="my-0 h-6 w-full overflow-hidden pl-1 text-center font-inter text-sm font-semibold capitalize text-black sm:my-2 sm:text-base md:text-left">
                {name}
              </h2>
            </div>

            <div className="absolute top-7 left-0 hidden w-full justify-center sm:top-14 md:left-4 md:flex md:w-fit">
              <AppButton
                className="h-[24px] text-[10px] sm:h-[32px]  sm:text-[16px]"
                size={isMobile ? "small" : "medium"}
                variant={isMobile ? "contained" : "contained"}
                title={"Explore"}
              />
            </div>
          </div>
        )}
      </Link>
    </>
  );
}
