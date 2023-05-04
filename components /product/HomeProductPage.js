import { useEffect, useState } from "react";
import { Tab } from "@mui/material";
import { ErrorScreen } from "../basics";

// import productImg from '../../assets/homeproduct.png'
import AppNoProducts from "../basics/AppNoProducts";
import { useGetAllProductsByAnyCategoryById } from "../../services/productServices";
import LoadingScreen from "../basics/LoadingScreen";
import { ViewAllButton } from "../basics/breadcrumb";
import ProductsCard, { ProductCard } from "../cards/ProductsCard";
import { Box } from "@mui/system";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
export default function HomeProductPage({
  userType,
  userData,
  categories,
  products,
}) {
  // const {
  //   data: categories,
  //   isLoading: categoriesLoading,
  //   isError: categoriesError,
  // } = useGetAllCategories()
  const [tabValue, setTabValue] = useState(0);
  const [productsData, setProductData] = useState([]);
  const { data, isLoading, isError } = useGetAllProductsByAnyCategoryById(
    tabValue !== 0 && tabValue
  );
  useEffect(() => {
    if (data) {
      setProductData(data);
    } else {
      setProductData(products);
    }
  }, [products, data]);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  if (isError) return <ErrorScreen />;

  return (
    <div className="relative">
      <div className="">
        <div className="mx-auto sm:mt-10 mb-0 sm:mb-10 w-11/12 md:w-w-main mt-10 flex  justify-center">
          <div className="mx-auto flex items-center justify-center md:space-x-2 lg:w-2/5">
            <div className="w-2/6 md:w-auto">
              <p className="m-0 flex justify-end text-xs font-bold uppercase sm:text-base">
                Made in India
              </p>
              <div className=" flex justify-end">
                <svg
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.734863" width="21" height="4" fill="#DE5D00" />
                  <rect y="4.73486" width="21" height="4" fill="#EEEEEE" />
                  <rect y="8.73486" width="21" height="4" fill="#038A00" />
                </svg>
              </div>
            </div>

            <div className="mx-auto w-10 rotate-90 rounded-lg border-b-3 border-theme-primary-main md:w-12" />
            <div className=" flex w-4/6 justify-start md:w-auto lg:w-60">
              <div className="text-start">
                <span className=" theme-heading  h-14 font-raleway text-xl font-extrabold capitalize sm:text-custom-44 md:text-custom-44">
                  Products
                </span>
                <div className="mx-auto">
                  <p className="m-0 font-inter text-xs font-medium leading-tight opacity-60 md:text-base md:leading-normal">
                    Elevate Your Experience with Our Authentic Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto  w-full md:w-w-main relative flex py-4 md:py-1">
          <div className="mx-auto w-full">
            <Box>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={true}
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                <Tab label="All" />
                {categories?.length > 0 &&
                  categories?.map((item, index) => {
                    return (
                      <Tab key={index} label={item?.name} value={item?.slug} />
                    );
                  })}
                {/* {otherProducts?.length && <Tabs label="Others" />}/ */}
              </Tabs>
            </Box>
          </div>
        </div>
        <div className="mx-auto my-0 w-11/12 md:w-w-main   sm:my-0 md:px-5">
          {tabValue !== 0 && isLoading ? (
            <div className="h-fit">
              <LoadingScreen />
            </div>
          ) : productsData?.length > 0 ? (
            <div>
              <div className="w-full md:hidden">
                <div className="grid grid-cols-2 gap-4">
                  {productsData?.slice(0, 6)?.map((item) => {
                    return (
                      <ProductCard
                        key={item?._id}
                        item={item}
                        userType={userType}
                        userData={userData}
                        redirectPath="/categories/[categorySlug]/p/[productSlug]"
                        redirectUrl={`/categories/${tabValue}/p`}
                      />
                    );
                  })}
                </div>
                <div className="all_cursor ml-auto mt-4 w-fit">
                  <ViewAllButton navigateTo="/p" />
                </div>
              </div>
              <div className="hidden md:block">
                <ProductsCard
                  data={productsData}
                  cardDisplayIn={"home"}
                  userType={userType}
                  userData={userData}
                  redirectPath="/categories/[categorySlug]/p/[productSlug]"
                  redirectUrl={`/categories/${tabValue}/p`}
                />
              </div>
            </div>
          ) : (
            <AppNoProducts />
          )}
        </div>
        <div className="mx-auto w-11/12 md:w-w-main">
          <div className=" all_cursor ml-auto hidden w-fit md:block">
            <ViewAllButton navigateTo="/p" />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden sm:block">
        <svg
          width="94"
          height="67"
          viewBox="0 0 94 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3333 20.7349C17.3333 22.2076 18.5272 23.4015 20 23.4015C21.4728 23.4015 22.6667 22.2076 22.6667 20.7349C22.6667 19.2621 21.4728 18.0682 20 18.0682C18.5272 18.0682 17.3333 19.2621 17.3333 20.7349ZM54.2085 20.7349L54.656 20.512C54.5715 20.3422 54.3981 20.2349 54.2085 20.2349V20.7349ZM62.1775 36.7349L61.7299 36.9578C61.8145 37.1276 61.9878 37.2349 62.1775 37.2349V36.7349ZM89 37.2349C89.2761 37.2349 89.5 37.011 89.5 36.7349C89.5 36.4587 89.2761 36.2349 89 36.2349V37.2349ZM20 21.2349H54.2085V20.2349H20V21.2349ZM53.7609 20.9578L61.7299 36.9578L62.625 36.512L54.656 20.512L53.7609 20.9578ZM62.1775 37.2349H89V36.2349H62.1775V37.2349Z"
            fill="url(#paint0_linear_437_9379)"
          />
          <path
            d="M40 41.7349C40 43.944 41.7909 45.7349 44 45.7349C46.2091 45.7349 48 43.944 48 41.7349C48 39.5257 46.2091 37.7349 44 37.7349C41.7909 37.7349 40 39.5257 40 41.7349ZM73.0323 41.7349L73.4818 41.1345C73.3521 41.0374 73.1943 40.9849 73.0323 40.9849V41.7349ZM79.7097 46.7349L79.2601 47.3352C79.3899 47.4324 79.5476 47.4849 79.7097 47.4849V46.7349ZM89 47.4849C89.4142 47.4849 89.75 47.1491 89.75 46.7349C89.75 46.3206 89.4142 45.9849 89 45.9849V47.4849ZM44 42.4849H73.0323V40.9849H44V42.4849ZM72.5827 42.3352L79.2601 47.3352L80.1592 46.1345L73.4818 41.1345L72.5827 42.3352ZM79.7097 47.4849H89V45.9849H79.7097V47.4849Z"
            fill="#575FF0"
          />
          <path
            d="M49.3333 29.2349C49.3333 30.7076 50.5272 31.9015 52 31.9015C53.4728 31.9015 54.6667 30.7076 54.6667 29.2349C54.6667 27.7621 53.4728 26.5682 52 26.5682C50.5272 26.5682 49.3333 27.7621 49.3333 29.2349ZM93 29.7349C93.2761 29.7349 93.5 29.511 93.5 29.2349C93.5 28.9587 93.2761 28.7349 93 28.7349V29.7349ZM52 29.7349H93V28.7349H52V29.7349Z"
            fill="#1488CC"
          />
          <defs>
            <linearGradient
              id="paint0_linear_437_9379"
              x1="90.2673"
              y1="28.7349"
              x2="17.8173"
              y2="28.7349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0095ED" />
              <stop offset="1" stopColor="#151ECF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
