import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectcategoriesMap } from "../../store/categories/categories.selectors";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectcategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
