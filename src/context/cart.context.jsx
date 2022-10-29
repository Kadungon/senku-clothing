import { useState, createContext } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemtoCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(productToAdd, cartItems));
  };
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemtoCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
