import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDeviceType from "../../custom-hooks/useDeviceType";
import {
  addManualQuantityInCart,
  addToCart,
  decreaseQuantityInCart,
  increaseQuantityInCart,
} from "../../redux/slices/cartSlice";
import { handleToastOpen } from "../../redux/slices/toastSlice";
import { useGetProductById } from "../../services/productServices";
import { getImageForCart } from "../../utils/utils-fun";
import { AppCarousel, ErrorScreen } from "../basics";
import LoadingScreen from "../basics/LoadingScreen";
import ProductDetailsSummary from "./ProductDetailsSummary";

export default function QuickView({ productUrl }) {
  // const { push } = useRouter()
  const dispatch = useDispatch();

  const [url, setUrl] = useState(productUrl?.split("/")?.pop());
  const { data, isLoading, isError } = useGetProductById(url);
  const { isMobile } = useDeviceType();
  const { cartItems } = useSelector((state) => state.cart);
  const { userType } = useSelector((state) => state.user);

  const images = data?.images?.map((item) => item?.values)?.flat();

  useEffect(() => {
    const itemIndex = cartItems?.findIndex(
      (item) =>
        item?.[`${userType}Rows`][0]?.id == data?.[`${userType}Rows`][0]?.id
    );
    if (itemIndex >= 0) {
      setQuantity(cartItems[itemIndex]?.quantity);
    } else {
      setQuantity(1);
    }
  }, [cartItems, url, userType, data]);

  const [quantity, setQuantity] = useState(1);

  const initialUrl = url?.split("&")[0];

  if (isLoading) return <LoadingScreen />;

  if (isError) return <ErrorScreen />;
  const productDetailsCarousel = {
    slidesToShow: 1,
  };
  const handleVariantChange = (variantData, title, option) => {
    let variants = variantData;
    let newVariant = {
      title: title?.toLowerCase(),
      value: option?.toLowerCase(),
    };
    let index = variantData?.findIndex(
      (item) => item?.title === title?.toLowerCase()
    );
    variants[index] = newVariant;

    const finalHalf = variants
      ?.map((item) => {
        return `&${item?.title}=${item?.value}`;
      })
      ?.join("");
    setUrl(`${initialUrl + finalHalf}`);
    // push(`${initialUrl + finalHalf}`)
  };

  const handleAddToCart = () => {
    const finalImagesForCart = getImageForCart(data, userType);
    let copyProductForCart = { ...data };
    copyProductForCart.images = finalImagesForCart[0];
    dispatch(
      addToCart({
        product: { ...copyProductForCart, quantity: 1 },
        userType: userType?.toLowerCase(),
      })
    );
    dispatch(handleToastOpen({ message: "Added To Cart", status: "success" }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(
      increaseQuantityInCart({
        product: data,
        userType: userType?.toLowerCase(),
      })
    );
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(
        decreaseQuantityInCart({
          product: data,
          userType: userType?.toLowerCase(),
        })
      );
      setQuantity(quantity - 1);
    }
  };
  const handleManualAddOfQuantity = (value) => {
    dispatch(
      addManualQuantityInCart({
        product: data,
        userType: userType?.toLowerCase(),
        quantity: Number(value) > 1 ? Number(value) : 1,
      })
    );
    setQuantity(Number(value) > 1 ? Number(value) : 1);
  };
  return (
    <>
      <div
        className={` grid w-full ${
          isMobile ? "grid-cols-1" : "grid-cols-2"
        } h-[80vh]`}
      >
        <div className="h-full overflow-hidden">
          <AppCarousel {...productDetailsCarousel}>
            {images?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative h-full w-full animate-opacityAnimation"
                >
                  <Image
                    fill
                    loading="lazy"
                    src={item}
                    className="h-[80vh] w-full object-cover"
                    alt="Sample image"
                  />
                </div>
              );
            })}
          </AppCarousel>
        </div>

        <div className="h-full overflow-scroll p-4">
          <ProductDetailsSummary
            product={data}
            quantity={quantity}
            userType={userType}
            onManualAddOfQuantity={handleManualAddOfQuantity}
            handleVariantChange={handleVariantChange}
            handleAddToCart={handleAddToCart}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
          />
          {/* <ProductLoginForm /> */}
        </div>
      </div>
    </>
  );
}
