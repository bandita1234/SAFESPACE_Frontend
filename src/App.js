import logo from "./logo.svg";
import "./App.css";
import SignUpDoctor from "./pages/SignUpDoctor";
import SignUpUser from "./pages/SignUpUser";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocProfile from "./pages/DocProfile";
import Chat from "./pages/Chat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import UserState from "./context/userState";

function App() {
  return (
    <div className="App">
      <UserState>
        <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="user/signup/" element={<SignUpUser />} />
            <Route path="docsignup/" element={<SignUpDoctor />} />
            <Route path="user/login/" element={<Login />} />
            <Route path="docProfile/" element={<DocProfile />} />
            <Route path="chat/" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserState>
    </div>
  );
}

export default App;
