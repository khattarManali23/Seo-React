import { useEffect, useState } from "react";
import AppIconButton from "../basics/AppIconButton";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { AppButton, AppModal } from "../basics";
import { AppAosAnnimation } from "../animate";
import { Box, Stack, Skeleton } from "@mui/material";
import { ProductEnquiryForm } from "../forms";
import {
  getPriceDataByUserType,
  getProductImages,
} from "../../utils/utils-fun";
import {
  useCreateWishlistData,
  useGetAllWishlist,
} from "../../services/wishlistServices";
import { LoginFormCard, LoginImageCard } from "../forms/LoginForm";
import { useDispatch } from "react-redux";
// import { addToCart } from 'src/redux/slices/cartSlice'
import { handleToastOpen } from "../../redux /slices/toastSlice";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { ColorSinglePicker } from "../color-utils";

const ProductsCard = ({
  data,
  cardDisplayIn,
  userType,
  userData,
  // isLoading,
  redirectUrl,
  redirectPath,
}) => {
  return (
    <div className="">
      {console.log("data", data?.length)}
      <AppAosAnnimation animationName={"fade-up"} animationDuration={"800"}>
        <div className=" my-4 grid grid-cols-2 h-screen gap-3 md:container sm:my-12 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {data?.length > 0 &&
            (cardDisplayIn == "home" ? data?.slice(0, 8) : data)?.map(
              (item) => {
                return (
                  <div className="w-full" key={item._id}>
                    {console.log("manali", item)}
                    <ProductCard
                      item={item}
                      userType={userType}
                      userData={userData}
                      redirectUrl={redirectUrl}
                      redirectPath={redirectPath}
                    />
                  </div>
                );
              }
            )}
        </div>
      </AppAosAnnimation>
    </div>
  );
};

export default ProductsCard;

export const ProductCard = ({
  item,
  userType,
  userData,
  redirectUrl,
  redirectPath,
}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate } = useCreateWishlistData();
  const { data, isLoading, isError } = useGetAllWishlist(userData?._id);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // const [showQuickModal, setShowQuickModal] = useState(false)
  const [finalRedirectUrl, setFinalRedirectUrl] = useState("");
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
    console.log("redirectUrl", item);
    // replace 0 value if category slug not come from All option in tab
    let lastSlug = redirectUrl?.split("/")?.slice(-2);

    if (Number(lastSlug[0]) === 0 && redirectPath !== "/p/[slug]") {
      setFinalRedirectUrl(
        redirectUrl?.split("/")?.slice(0, -2)?.join("/") +
          `/${item?.categoryIds[0]?.slug}/p`
      );
    }
    // else set the coming value as it is
    else {
      setFinalRedirectUrl(redirectUrl);
    }
  }, [redirectUrl, item]);
  // to close modal if user login
  useEffect(() => {
    if (userData !== null) {
      setShowLoginModal(false);
    }
  }, [userData]);
  const { _id, title, productId, seoSlug } = item;
  console.log(title, productId, seoSlug, "check");
  // console.log('userData', userData)
  // if (userData !== null && isLoading) return console.log('isLoading...')
  // if (userData !== null && isError) return console.log('isError...')
  // console.log('finalRedirectUrl', finalRedirectUrl)

  // const priceData = getPriceDataByUserType(item, userType)
  // const images = getProductImages(item, 'base')
  // console.log('images', images)
  // const oneDataUrl =
  //   item?.variants?.length > 0
  //     ? priceData?.url
  //     : `${seoSlug}?userType=${userType}`
  // const finalUrl = `${finalRedirectUrl}/${oneDataUrl}`
  // console.log('finalUrl', finalUrl)
  //add to cart function
  // function handleAddToCart() {
  //   const finalImagesForCart = getImageForCart(item, userType)
  //   let copyProductForCart = { ...item }
  //   copyProductForCart.images = finalImagesForCart[0]
  //   dispatch(
  //     addToCart({
  //       product: { ...copyProductForCart, quantity: 1 },
  //       userType: userType?.toLowerCase(),
  //     })
  //   )
  //   dispatch(handleToastOpen({ message: 'Added To Cart', status: 'success' }))
  // }
  // add to wishlist function
  function handleAddToWishlist() {
    if (userData !== null) {
      const checkInWishlist = data?.findIndex((row) => row?.productId === _id);
      if (checkInWishlist < 0) {
        const payload = {
          productUrl: oneDataUrl,
          productSlug: seoSlug,
          cust_id: userData?._id,
          productId: _id,
        };
        mutate(payload, {
          onSuccess: () =>
            queryClient.invalidateQueries(["_getAllAllwishlist"]),
        });
      } else {
        dispatch(
          handleToastOpen({ message: "Already Added", status: "warning" })
        );
      }
    } else {
      setShowLoginModal(true);
    }
  }
  // mui classes to show elements in hover
  const classes = {
    outerDiv: {
      "&:hover": {
        "& .addIcon": {
          display: "block",
        },
        "& .buttonBox": {
          display: "block",
          height: "100%",
          width: "100%",
        },
      },
    },
    addIcon: {
      display: "none",
      zIndex: 1,
    },
    buttonBox: {
      display: "none",
      zIndex: 1,
      transition: "all 0.5s ease-in-out",
    },
  };

  return (
    <div className="">
      <Box
        sx={classes.outerDiv}
        className="relative h-auto rounded-lg p-2 shadow-shadow-primary sm:h-96 sm:shadow-none"
      >
        <Box sx={{ cursor: "pointer", background: "transparent" }}>
          <Box
            sx={classes.addIcon}
            className="addIcon absolute top-4 right-4"
            spacing="2"
          >
            {pageLoading ? (
              <Skeleton size="small" className="h-10 w-10" />
            ) : (
              <Stack className="hidden rounded-full bg-white shadow-md md:block">
                <AppIconButton
                  onClick={() => handleAddToWishlist(productId, oneDataUrl)}
                  size="small"
                  Icon={
                    <HiOutlineHeart className="text-dark-grey opacity-70" />
                  }
                />
              </Stack>
            )}
            {/* <Stack className="md:block hidden bg-white rounded-full shadow-md mt-2">
              <AppIconButton
                onClick={() => handleAddToCart()}
                size="small"
                Icon={
                  <HiOutlineShoppingBag className="text-theme-primary-main" />
                }
              />
            </Stack> */}
          </Box>

          <Link href={`${redirectUrl}/p/${item.slug}`}>
            <Box
              sx={classes.outerDiv}
              className="relative aspect-square w-full overflow-hidden rounded-lg"
            >
              {pageLoading ? (
                <Skeleton
                  variant="rectangular"
                  className="h-full w-full rounded-xl"
                />
              ) : (
                <Image
                  fill
                  loading="lazy"
                  src={
                    item?.images?.length > 0
                      ? item?.images[0]?.values[0].url
                      : "https://picsum.photos/seed/picsum/200/300"
                  }
                  alt={title}
                  style={{ transition: "all 0.5s ease-in-out" }}
                  className="animate-fadeUpAnimation h-full w-full overflow-hidden rounded-lg object-cover transition-all duration-1000 md:hover:scale-[1.2]"
                />
              )}
            </Box>
          </Link>
          <Stack className=" absolute top-4 right-4 z-10 rounded-full bg-white shadow-md md:hidden">
            <AppIconButton
              onClick={() => handleAddToWishlist(productId, oneDataUrl)}
              size="small"
              Icon={<HiOutlineHeart className="text-dark-grey opacity-70" />}
            />
          </Stack>
          <Stack spacing={1} className="">
            <Link href={`${redirectUrl}/p/${item.slug}`}>
              <div className="p-1 sm:p-2">
                {pageLoading ? (
                  <Skeleton className="h-6 w-full rounded-xl" />
                ) : (
                  <span className="sm:h-6 h-10 mb-0 block w-full overflow-hidden text-center font-inter text-sm sm:font-medium font-semibold capitalize opacity-80 sm:mb-2 sm:text-base ">
                    {title}
                  </span>
                )}
              </div>
            </Link>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
              className="buttonBox"
              sx={classes.buttonBox}
            >
              <Box
                direction="row"
                alignItems="center"
                className="space-x-2 flex absolute left-3"
              >
                <Stack className=" md:block hidden bg-white rounded-full shadow-md">
                  <AppButton
                    onClick={() => handleAddToCart()}
                    variant="contained"
                    title={"Add To Order"}
                  />
                </Stack>
              </Box>
              {/* <Box
                direction="row"
                alignItems="center"
                className="flex items-center justify-center space-x-2"
              >
                {' '}
                {pageLoading ? (
                  <Skeleton
                    width={'70%'}
                    className="h-20 animate-opacityAnimation rounded-[80px]  md:block hidden"
                  />
                ) : (
                  <Stack className="hidden rounded-full bg-white shadow-md md:block">
                    <AppButton
                      onClick={() => {
                        setShowEnquiryModal(true)
                      }}
                      variant="outlined"
                      title={'Enquire Now'}
                    />
                  </Stack>
                )}
              </Box> */}
            </Stack>
          </Stack>
          {/* open only mobileView  */}
          <Box className="flex justify-center gap-4">
            <Stack className="md:hidden bg-white z-100  rounded-full  shadow-md">
              <AppIconButton
                onClick={() => setShowQuickModal(true)}
                size="medium"
                Icon={
                  <HiOutlineShoppingBag className="text-theme-primary-main" />
                }
              />
            </Stack>
          </Box>

          {/* close only mobile */}
        </Box>
      </Box>
      {/* {/ login /register modal /} */}
      <AppModal
        open={showLoginModal}
        handleClose={() => setShowLoginModal(false)}
        maxWidth={"md"}
        fullWidth
      >
        <div className="grid grid-cols-1 gap-5 p-3 sm:grid-cols-2 md:grid-cols-2">
          <div className="hidden md:block">
            <LoginImageCard />
          </div>
          <div className="p-2 lg:py-5 lg:px-7">
            <LoginFormCard />
          </div>
        </div>
      </AppModal>
      {/* {/ quickview modal /} */}
      {/* <AppModal
        open={showQuickModal}
        handleClose={() => setShowQuickModal(false)}
        maxWidth={'md'}
      >
        <QuickView data={item} productUrl={finalUrl} />
      </AppModal> */}
      {/* {/ quickview modal /} */}
      <AppModal
        open={showEnquiryModal}
        title={"Product Enquiry"}
        handleClose={() => setShowEnquiryModal(false)}
        fullWidth
        maxWidth={"xs"}
      >
        <ProductEnquiryForm
          userData={userData}
          userType={userType}
          _id={_id}
          setShowEnquiryModal={setShowEnquiryModal}
        />
      </AppModal>
    </div>
  );
};
