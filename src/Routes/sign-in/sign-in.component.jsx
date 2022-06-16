import { signInWithGooglePopup ,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userSnapshot = await createUserDocumentFromAuth(response.user)
    console.log(userSnapshot)

}

const SignIn = () => {
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SignIn;