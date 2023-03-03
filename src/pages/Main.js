import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userState";

const Main = () => {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("token")) userCtx.fetchUser();
    else if (localStorage.getItem("doctoken")) userCtx.fetchDoc();
  }, []);

  return (
    <div>
      <div>{userCtx.user._id && `Hello  ${userCtx.user.username}`}</div>
      <div> {userCtx.doc._id && `Hello ${userCtx.doc.name}`}</div>
    </div>
  );
};

export default Main;
