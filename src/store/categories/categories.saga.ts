import { takeLatest, all, call, put } from "typed-redux-saga";

import {
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from "./categories.actions";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(getCollectionAndDocuments, "categories");
    yield* put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield* put(fetchCategoriesError(error as Error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
