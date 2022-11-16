import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const clearItem = (productToClear, cartItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
const addCartItem = (productToAdd, cartItems) => {
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

const itemCount = (cartItems) => {
  return cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
};

const itemTotal = (cartItems) => {
  return cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  cartCount: 0,
  Carttotal: 0,
  addItemtoCart: () => null,
  removeItemFromCart: () => null,
  ClearItemFromCart: () => null,
});

export const CART_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = itemCount(newCartItems);
    const newCartTotal = itemTotal(newCartItems);

    dispatch(
      createAction(CART_ACTION_TYPE.ADD_TO_CART, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemtoCart = (productToAdd) => {
    updateCartItemsReducer(addCartItem(productToAdd, cartItems));
  };

  const removeItemFromCart = (productToRemove) => {
    updateCartItemsReducer(removeCartItem(productToRemove, cartItems));
  };

  const ClearItemFromCart = (productToRemove) => {
    updateCartItemsReducer(clearItem(productToRemove, cartItems));
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemtoCart,
    cartCount,
    cartTotal,
    removeItemFromCart,
    ClearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
