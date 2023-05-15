import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);

  if (currentUser) {
    console.log(selectCurrentUser);
    return <Navigate to="/shop" />;
  }

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
