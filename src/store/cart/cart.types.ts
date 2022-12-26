import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPE  {
  ADD_TO_CART = "cart/ADD_TO_CART",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
};

export type CartItem = CategoryItem & {
  quantity: number
}
