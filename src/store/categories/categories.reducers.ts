import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import { CategoryAction } from "./categories.actions";


export type CategoriesState = {
  readonly categories: Category[],
  readonly isLoading: boolean,
  readonly error: null | Error;
}
const CATEGORIES_INITIAL_STATE : CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};
export const categoriesReducers = (state = CATEGORIES_INITIAL_STATE, action = {} as CategoryAction ):CategoriesState => {
  

  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};