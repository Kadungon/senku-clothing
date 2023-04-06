import { createSlice } from "@reduxjs/toolkit";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesStart(state) {
      state.isLoading = true;
    },
    fetchCategoriesSuccess(state, action) {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await getCollectionAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};
