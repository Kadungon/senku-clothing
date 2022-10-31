import { useState, createContext, useEffect } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";
/* import SHOP_DATA from "../shop-data"; */
/* import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils"; */

const CategoriesContext = createContext(null);

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  /*   useEffect(() => {
    console.log(SHOP_DATA);
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []); */

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
