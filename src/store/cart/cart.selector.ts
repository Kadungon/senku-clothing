import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

export const selectCartReducer = (state):CartState => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => 
   cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
  
);
