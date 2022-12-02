import { CATEGORIES_ACTION_TYPES } from "./categories.types";
const DEFAULT_STATE = {
  categories: [],
};

export const categoriesReducers = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };

    default:
      return state;
  }
};
