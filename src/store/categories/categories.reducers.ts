import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import {
  CategoryAction,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from "./categories.actions";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: null | Error;
};
const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};
export const categoriesReducers = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) return { ...state, isLoading: true };
  if (fetchCategoriesSuccess.match(action))
    return { ...state, categories: action.payload, isLoading: false };
  if (fetchCategoriesError.match(action))
    return { ...state, error: action.payload, isLoading: false };

  return state;
};
