import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducers } from "./categories/categories.reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducers,
});
