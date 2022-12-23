import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;
export type FetchCategoriesError =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR>;
export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesError;
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  categories: Category[]
): FetchCategoriesSuccess =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesError = (error: FetchCategoriesError) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, error);
