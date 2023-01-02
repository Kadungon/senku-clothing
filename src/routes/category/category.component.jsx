import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import Spinner from "../../components/spinner/spinner.component";
import { ProductCard } from "../../components/product-card/product-card.components";
import { gql, useQuery } from "@apollo/client";

import "./category.styles.scss";

const GET_CATEGORY = gql`
  query ($title: String) {
    getCollectionsByTitle(title: $title) {
      title
      id
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: category },
  });
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;
      setProducts(items);
    }
  }, [category, data]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
            {Products &&
              Products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;
