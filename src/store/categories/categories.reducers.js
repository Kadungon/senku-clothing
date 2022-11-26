import { CATEGORIES_ACTION_TYPES } from "./categories.types";
const DEFAULT_STATE = {
  categoriesMap: {},
};

export const categoriesReducers = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categoriesMap: payload };

    default:
      return state;
  }
};
