import { createContext } from "react";
import React, { useState } from "react";

export const UserContext = createContext();

const UserState = (props) => {
  const [user, setUser] = useState({});
  const [doc, setDoc] = useState({});

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
  const fetchDoc = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/doctor`, {
      method: "GET",
      headers: {
        token: localStorage.getItem("doctoken"),
      },
    });
    let json = await response.json();
    if (response.status === 200) {
      setDoc(json);
    } else {
      setDoc({});
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("doctoken");
  };

  return (
    <UserContext.Provider value={{ user, doc, fetchUser, fetchDoc, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
