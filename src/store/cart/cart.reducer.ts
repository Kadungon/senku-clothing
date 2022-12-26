import { CART_ACTION_TYPE, CartItem } from "./cart.types";
import { CartAction, setIsCartOpen, setCartItem } from "./cart.action";
export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state: CartState = CART_INITIAL_STATE,
  action = {} as CartAction
) => {
  if (setIsCartOpen.match(setIsCartOpen)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItem.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  return state;
};
