import PropTypes from "prop-types";
// @mui
import { Grid, Card, CardHeader, Typography } from "@mui/material";
// import EmptyContent from
import CheckoutSummary from "../CheckoutSummary";
import CheckoutCartProductList from "./CheckoutCartProductList";
import { AppButton } from "../../basics";
import { IoIosArrowBack } from "react-icons/io";
// import emptyCart from "../../../assets/images/empty_cart.jpeg";
import { useRouter } from "next/router";
import EmptyContent from "components/empty-content/EmptyContent";
// ----------------------------------------------------------------------

CheckoutCart.propTypes = {
  cart: PropTypes.object,
  priceSummary: PropTypes.object,
  userType: PropTypes.string,
  onNextStep: PropTypes.func,
  onDeleteCart: PropTypes.func,
  onApplyDiscount: PropTypes.func,
  onManualAddOfQuantity: PropTypes.func,
  onDecreaseQuantity: PropTypes.func,
  onIncreaseQuantity: PropTypes.func,
  onApplyDiscount: PropTypes.func,
};

export default function CheckoutCart({
  cart,
  priceSummary,
  userType,
  onDecreaseQuantity,
  onDeleteCart,
  onNextStep,
  onManualAddOfQuantity,
  onIncreaseQuantity,
  onApplyDiscount,
}) {
  const { push } = useRouter();
  const totalItems = cart?.length;
  const isEmptyCart = !cart?.length;
  return (
    <>
      <AppButton
        className="mb-1"
        color="inherit"
        startIcon={<IoIosArrowBack />}
        onClick={() => push("/p")}
        title={"Continue Shopping"}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardHeader
              title={
                <Typography variant="h6">
                  Cart
                  <Typography component="span" sx={{ color: "text.secondary" }}>
                    &nbsp;({totalItems} item)
                  </Typography>
                </Typography>
              }
              sx={{ mb: 3 }}
            />

            {!isEmptyCart ? (
              <CheckoutCartProductList
                products={cart}
                userType={userType}
                onDelete={onDeleteCart}
                onManualAddOfQuantity={onManualAddOfQuantity}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
              />
            ) : (
              ""
            )}
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <CheckoutSummary
            enableDiscount
            total={priceSummary?.total}
            discount={priceSummary?.discount}
            subtotal={priceSummary?.subtotal}
            gstValue={priceSummary?.gstValue}
            gstAmount={priceSummary?.gstAmount}
            onApplyDiscount={onApplyDiscount}
          />
          <AppButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={!cart?.length}
            onClick={onNextStep}
            title="Check Out"
          />
        </Grid>
      </Grid>
    </>
  );
}
