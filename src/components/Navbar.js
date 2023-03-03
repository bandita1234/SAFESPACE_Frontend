import React, { useContext, useEffect, useState } from "react";
import "../css/Navbar.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userState";

const Navbar = () => {
  const userCtx = useContext(UserContext);
  const [navBackground, setNavBackground] = useState(false);

  const setNavbar = () => {
    if (window.scrollY > 86) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
    // eslint-disable-next-line
  }, []);
  return (
    <div className={`main_nav ${navBackground ? "solid" : "trans"}`}>
      <div className="right_nav">
        <h1 style={{ color: "black" }}>SAFESPACE</h1>
        <div className="searchField">
          <div>
            <input type="search" name="search" id="" placeholder="Search... " style={{backgroundColor:'#58dee8b8'}} />
          </div>
          <div className="nav_btn">
            <button type="submit">Search</button>
          </div>
        </div>
        <Link to={"/chat"}>
          <BsFillChatDotsFill style={{ fontSize: "2em", color: "black" }} />
        </Link>
        {!localStorage.getItem("token") && (
          <>
            <Link to={"/user/login"} className="nav_btn">
              <button style={{ padding: "6px 10px" }}>Login</button>
            </Link>
            <Link to={"user/signup"} className="nav_btn">
              <button>Sign Up</button>
            </Link>
          </>
        )}
        {localStorage.getItem("token") && (
          <div className="nav_btn">
            <a
              href="/"
              style={{ padding: "6px 10px" }}
              onClick={userCtx.logout}
            >
              Logout
            </a>
          </div>
        )}
        <div className="main_profile">
          <div className="profile_display">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
