import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.components";
import CartIcon from "../../components/cart-icon/cart-icon.components";

import {
  NavigationContainer,
  NavLinksContainer,
  NavLinks,
  LogoContainer,
} from "./navigation.styles.jsx";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">SHOP</NavLinks>
          {currentUser ? (
            <NavLinks as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to="/auth">SIGN IN</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
