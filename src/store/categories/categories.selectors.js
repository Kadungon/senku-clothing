import { createSelector } from "reselect";

const selectcategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesLoding = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.isloading
);

export const selectcategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, categories) => {
      const { title, items } = categories;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
