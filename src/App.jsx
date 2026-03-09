import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import AccountType from "./pages/AccountType";
import SignUp from "./pages/SignUp";
import ExplorePage from "./pages/ExplorePage";
import LearnPage from "./pages/LearnPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/account-type" element={<AccountType />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/learn" element={<LearnPage />} />
    </Routes>
  );
}

export default App;