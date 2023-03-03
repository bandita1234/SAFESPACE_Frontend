import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userState";

const Main = () => {
  const userCtx = useContext(UserContext);
  // console.log(userCtx.user);
  useEffect(() => {
    userCtx.fetchUser();
  }, []);

  return <div>Hello {userCtx.user.username}</div>;
};

export default Main;