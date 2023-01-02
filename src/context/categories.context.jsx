import { useState, createContext, useEffect } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import { gql, useQuery } from "@apollo/client";

const CategoriesContext = createContext({ categoriesMap: {} });

const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    if (data) {
      const { collections } = data;

      const collectionMap = collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});

      setCategoriesMap(collectionMap);
    }
  }, [data]);

  const value = { categoriesMap, loading, error };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
