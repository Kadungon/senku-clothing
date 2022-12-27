import { CategoryItem } from "../categories/categories.types";
import { CART_ACTION_TYPE, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

const clearItem = (
  productToClear: CartItem,
  cartItems: CartItem[]
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
const addCartItem = (
  productToAdd: CategoryItem,
  cartItems: CartItem[]
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  productToRemove: CartItem,
  cartItems: CartItem[]
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPE.SET_IS_CART_OPEN,
  boolean
>;
export type SetCartItem = ActionWithPayload<
  CART_ACTION_TYPE.ADD_TO_CART,
  CartItem[]
>;

export type CartAction = SetIsCartOpen | SetCartItem;

export const setCartItem = withMatcher(
  (cartItems: CartItem[]): SetCartItem =>
    createAction(CART_ACTION_TYPE.ADD_TO_CART, cartItems)
);

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean)
);

export const addItemtoCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(productToAdd, cartItems);
  return setCartItem(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(productToRemove, cartItems);
  return setCartItem(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = clearItem(cartItemToClear, cartItems);
  return setCartItem(newCartItems);
};
