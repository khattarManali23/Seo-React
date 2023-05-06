import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  billingAddress: null,
  shippingAddress: null,
  priceSummary: {
    subtotal: 0,
    discount: 0,
    shiiping: 0,
    total: 0,
    gstValue: 0,
    gstAmount: 0,
  },
  gstData: {},
  discountData: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // increaseQuantityInCart: (state, action) => {
    //   const { product, userType } = action.payload
    //   const itemIndex = state.cartItems?.findIndex(
    //     (item) =>

    //   )
    //   if (itemIndex >= 0) {
    //     //check if quantity variant is there
    //     if (state.cartItems[itemIndex].quantityVariants?.length > 0) {
    //       //find out if quantity is equal to any qauantityVariant
    //       let newPriceCheck = state.cartItems[
    //         itemIndex
    //       ]?.quantityVariants?.filter(
    //         (el) => el == state.cartItems[itemIndex].quantity
    //       )
    //       // set the quantity variant price if it is there
    //       if (newPriceCheck?.length > 0) {
    //         let rowValue = state.cartItems[itemIndex]?.[`${userType}Rows`][0]
    //         let newPrice =
    //           rowValue?.[`for${newPriceCheck[0]}plusQuantityPriceIs`]
    //         rowValue.perProductPrice = newPrice
    //       }
    //     }
    //     state.cartItems[itemIndex].quantity += 1
    //   }
    // },
    increaseQuantityInCart: (state, action) => {
      const { product } = action.payload

      console.log('product', product)
      const itemIndex = state.cartItems?.findIndex(
        (item) => item?.productId == product?.productId
      )
      console.log('itemIndex', itemIndex)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1
      }
    },

    decreaseQuantityInCart: (state, action) => {
      const { product } = action.payload

      const itemIndex = state.cartItems?.findIndex(
        (item) => item?.productId == product?.productId
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity -= 1
      }
    },
    addManualQuantityInCart: (state, action) => {
      let { product, quantity } = action.payload
      const itemIndex = state.cartItems?.findIndex(
        (item) => item?.productId == product?.productId
      )
      if (itemIndex >= 0) {
        // if item is already in cart then increase the quantity
        state.cartItems[itemIndex].quantity = quantity
      } else {
        // if item is not in cart then add it to cart
        state.cartItems.push(product)
      }
    },
    addToCart: (state, action) => {
      let { product } = action.payload
      const itemIndex = state.cartItems?.findIndex(
        (item) => item?.productId == product?.productId
      )
      if (itemIndex >= 0) {
        // if item is already in cart then increase the quantity
        state.cartItems[itemIndex].quantity += 1
      } else {
        // if item is not in cart then add it to cart
        state.cartItems.push(product)
      }
    },
    removeFromCartByCartId: (state, action) => {
      let { product } = action.payload
      const itemIndex = state.cartItems?.findIndex(
        (item) => item?.productId == product?.productId
      )
      if (itemIndex >= 0) {
        state.cartItems.splice(itemIndex, 1)
      }
    },
    emptyCartItems: (state) => {
      state.cartItems = []
      state.discountData = {}
      state.shippingAddress = null
      state.billingAddress = null
    },
    checkoutUserShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
    },
    checkoutUserBillingAddress: (state, action) => {
      state.billingAddress = action.payload
    },
    handleSetDiscountData: (state, action) => {
      state.discountData = action.payload
    },
    handleSetGstData: (state, action) => {
      state.gstData = action.payload
    },
    handleAllPriceAmount: (state, action) => {
      let userType = action.payload
      let discountAmt = 0
      let shippingAmt = 0
      let gstAmt = 0
      const gstData = state.gstData
      const discountData = state.discountData
      //calculating subtotal amount of products
      let subTotalAmt = state.cartItems?.reduce(
        (acc, curr) =>
          acc +
          Number(
            curr?.[`${userType}Rows`][0]?.perProductPrice * curr?.quantity
          ),
        0
      )
      //collecting gst amount
      if (gstData?.show_gst) {
        gstAmt = (gstData?.gst * subTotalAmt) / 100
      }
      //calculating discount
      if (discountData) {
        if (discountData?.discount_type == 'Percent') {
          discountAmt = (subTotalAmt * discountData?.discount) / 100
        } else {
          discountAmt = discountData?.discount
        }
      }

      state.priceSummary = {
        subtotal: subTotalAmt,
        discount: discountAmt,
        shiiping: shippingAmt,
        gstValue: gstData?.gst,
        gstAmount: gstAmt,
        total: eval(subTotalAmt + gstAmt + shippingAmt),
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addToCart,
  addManualQuantityInCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  emptyCartItems,
  removeFromCartByCartId,
  checkoutUserShippingAddress,
  checkoutUserBillingAddress,
  handleSetDiscountData,
  handleSetGstData,
  handleAllPriceAmount,
} = cartSlice.actions

export default cartSlice.reducer
