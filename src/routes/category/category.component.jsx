import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectcategoriesMap,
  selectCategoriesLoding,
} from "../../store/categories/categories.selectors";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { ProductCard } from "../../components/product-card/product-card.components";
import Spinner from "../../components/spinner/spinner.component";

import "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectcategoriesMap);
  const [Products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesLoding);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {Products &&
            Products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
