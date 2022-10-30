import { useState, createContext, useEffect } from "react";
import SHOP_DATA from "../shop-data";
/* import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils"; */

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  /*   useEffect(() => {
    console.log(SHOP_DATA);
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []); */

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
