import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { CategoryAction } from "./categories.actions";

const CATAGORY_DEFAULT_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};
export const categoriesReducers = (state = CATAGORY_DEFAULT_STATE, action = {} as CategoryAction ) => {
  

  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
      return { ...state, error: action, isLoading: false };

    default:
      return state;
  }
};
