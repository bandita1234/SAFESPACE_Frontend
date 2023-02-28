import logo from "./logo.svg";
import "./App.css";
import SignUpDoctor from "./pages/SignUpDoctor";
import SignUpUser from "./pages/SignUpUser";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocProfile from "./pages/DocProfile";
import UserProfile from "./pages/UserProfile"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="usersignup/" element={<SignUpUser />} />
          <Route path="docsignup/" element={<SignUpDoctor />} />
          <Route path="login/" element={<Login />} />
          <Route path="docProfile/" element={<DocProfile />} />
          <Route path="userProfile/" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
