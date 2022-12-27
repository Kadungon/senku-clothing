import {CartItem } from "./cart.types";
import { AnyAction } from 'redux';
import { setIsCartOpen, setCartItem } from "./cart.action";
export type CartState = {
  readonly  isCartOpen: boolean;
  readonly  cartItems: CartItem[];
};

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state: CartState = CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsCartOpen.match(action)) {

    console.log("true")
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItem.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
