import { CATEGORIES_ACTION_TYPES } from "./categories.types";
const DEFAULT_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducers = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
