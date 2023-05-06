import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckoutAddress,
  CheckoutCart,
  CheckoutOrderComplete,
  CheckoutPayment,
  CheckoutSteps,
} from "../../components/checkout";
import { LoginForm } from "../../components/forms";
import {
  addManualQuantityInCart,
  // checkoutUserBillingAddress,
  // checkoutUserShippingAddress,
  decreaseQuantityInCart,
  emptyCartItems,
  handleAllPriceAmount,
  handleSetGstData,
  increaseQuantityInCart,
  removeFromCartByCartId,
} from "../../redux/slices/cartSlice";
import { handleToastOpen } from "../../redux/slices/toastSlice";
import { useCreateDiscount } from "../../services/discountServices";
import { useGetAllGst } from "../../services/gstServices";

const Checkout = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllGst();
  const { mutate } = useCreateDiscount();
  const {
    cartItems,
    billingAddress,
    shippingAddress,
    priceSummary,
    discountData,
    gstData,
  } = useSelector((state) => state.cart);
  const { userData, userType } = useSelector((state) => state.user);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (cartItems?.length > 0) {
      dispatch(handleSetGstData(data?.generalconfig[0]));
      dispatch(handleAllPriceAmount(userType));
    }
  }, [cartItems, data, userType]);
  const STEPS = ["Cart", "Billing & address", "Payment"];
  const completed = activeStep === STEPS.length;
  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBackStep = () => {
    setActiveStep(activeStep - 1);
  };
  const handleGotoStep = (step) => {
    setActiveStep(step);
  };
  // console.log('data', discountData, gstData)
  const handleApplyDiscount = (data) => {
    try {
      const payload = {
        customer_id: userData?._id,
        discount_code: data?.discount_code,
      };
      mutate(payload);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCart = (item) => {
    dispatch(
      removeFromCartByCartId({
        product: item,
        userType: userType?.toLowerCase(),
      })
    );
    dispatch(
      handleToastOpen({ message: "Removed From Cart", status: "success" })
    );
  };
  const handleManualAddOfQuantity = (item, value) => {
    const payload = {
      product: item,
      userType: userType?.toLowerCase(),
      quantity: Number(value) > 1 ? Number(value) : 1,
    };
    dispatch(addManualQuantityInCart(payload));
  };
  const handleIncreaseQuantity = (item) => {
    dispatch(
      increaseQuantityInCart({
        product: item,
        userType: userType?.toLowerCase(),
      })
    );
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(
      decreaseQuantityInCart({
        product: item,
        userType: userType?.toLowerCase(),
      })
    );
  };

  const handleApplyShipping = (value) => {
    dispatch(applyShipping(value));
  };

  const handleReset = () => {
    dispatch(emptyCartItems());
  };
  return (
    <>
      <div className="md:my-12 my-7">
        {/* <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/orders/checkout']} />
        <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} /> */}
        {userData === null ? (
          <LoginForm />
        ) : (
          <Container>
            <Grid
              container
              justifyContent={completed ? "center" : "flex-start"}
            >
              <Grid item xs={12} md={8} sx={{ mx: "auto" }}>
                <CheckoutSteps activeStep={activeStep} steps={STEPS} />
              </Grid>
            </Grid>
            {completed ? (
              <CheckoutOrderComplete
                open={completed}
                onDownloadPDF={() => {}}
              />
            ) : (
              <>
                {activeStep === 0 && (
                  <CheckoutCart
                    cart={cartItems}
                    priceSummary={priceSummary}
                    userType={userType}
                    onNextStep={handleNextStep}
                    onDeleteCart={handleDeleteCart}
                    onManualAddOfQuantity={handleManualAddOfQuantity}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                    onApplyDiscount={handleApplyDiscount}
                  />
                )}
                {activeStep === 1 && (
                  <CheckoutAddress
                    cart={cartItems}
                    userData={userData}
                    priceSummary={priceSummary}
                    onNextStep={handleNextStep}
                    onBackStep={handleBackStep}
                    billingAddress={billingAddress}
                    shippingAddress={shippingAddress}
                  />
                )}
                {activeStep === 2 && billingAddress && (
                  <CheckoutPayment
                    cart={cartItems}
                    userData={userData}
                    userType={userType}
                    gstData={gstData}
                    discountData={discountData}
                    priceSummary={priceSummary}
                    shippingAddress={shippingAddress}
                    billingAddress={billingAddress}
                    onNextStep={handleNextStep}
                    onBackStep={handleBackStep}
                    onGotoStep={handleGotoStep}
                    onApplyShipping={handleApplyShipping}
                    onReset={handleReset}
                  />
                )}
              </>
            )}
          </Container>
        )}
      </div>
    </>
  );
};

export default Checkout;
