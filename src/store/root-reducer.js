import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducers";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
