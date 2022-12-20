import { CART_ACTION_TYPE } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const clearItem = (productToClear, cartItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
const addCartItem = (productToAdd, cartItems) => {
  console.log(productToAdd);
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

const removeCartItem = (productToRemove, cartItems) => {
  if (productToRemove.quantity > 1) {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  } else {
    return clearItem(productToRemove, cartItems);
  }
};

export const addItemtoCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(productToAdd, cartItems);
  return createAction(CART_ACTION_TYPE.ADD_TO_CART, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(productToRemove, cartItems);
  return createAction(CART_ACTION_TYPE.ADD_TO_CART, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearItem(cartItemToClear, cartItems);
  return createAction(CART_ACTION_TYPE.ADD_TO_CART, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);
