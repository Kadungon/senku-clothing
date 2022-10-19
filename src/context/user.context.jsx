import { createContext, useEffect, useState } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [size, setSize] = useState(null);
  const value = { currentUser, setCurrentUser };

  const checkSize = () => {
    console.log(window.innerWidth);
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use-effect");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("clean");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
