import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import AccountType from "./pages/AccountType";
import SignUp from "./pages/SignUp";
import ExplorePage from "./pages/ExplorePage";
import LearnPage from "./pages/LearnPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-10 bg-red-600 text-white flex items-center justify-center px-4 font-bold z-[100] text-sm">
        WARNING: This is a student project and is not affiliated with Coinbase. Do not enter any real personal information.
      </div>
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account-type" element={<AccountType />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;