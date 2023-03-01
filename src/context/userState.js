import { createContext } from "react";
import React, { useState } from "react";

export const UserContext = createContext();

const UserState = (props) => {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/user`, {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    let json = await response.json();

    if (response.status === 200) {
      setUser(json);
    } else {
      setUser({});
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, fetchUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
