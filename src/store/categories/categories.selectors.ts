import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./categories.reducers";
import { CategoryMap } from "./categories.types";

const selectcategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesLoding = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

export const selectcategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);
