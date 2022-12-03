import { createSelector } from "reselect";

const selectcategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectcategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, categories) => {
      const { title, items } = categories.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
