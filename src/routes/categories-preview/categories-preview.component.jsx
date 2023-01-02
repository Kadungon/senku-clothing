import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {Object.keys(categoriesMap).map((title) => (
            <CategoryPreview
              key={title}
              title={title}
              products={categoriesMap[title]}
            />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
