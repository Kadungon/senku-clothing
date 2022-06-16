import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import SignIn from "./Routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
