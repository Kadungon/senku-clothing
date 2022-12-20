import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectcategoriesMap,
  selectCategoriesLoding,
} from "../../store/categories/categories.selectors";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectcategoriesMap);
  const isLoading = useSelector(selectCategoriesLoding);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
