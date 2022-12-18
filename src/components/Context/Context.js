import React, { createContext, useState } from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import avatar from "../../images/avatar.png";

export const AuthContext = createContext();

function Context({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [userDetails, setUserDetails] = useState({});

  const user = auth.currentUser;
  var userImage = "";
  var userName = "";
  var userEmail = "";

  if (user !== null) {
    userImage = user.photoURL;
    userName = user.displayName;
    userEmail = user.email;
  } else {
    userImage = avatar;
    userName = "Me";
  }

  const history = useHistory();

  console.log(user);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("userDetails", userName);
      setIsAuth(true);
      setUserDetails(userName);
    });
    history.push("/feed");
  };

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
    alert("Logged out successfully!");
    history.push("/");
  };

  const value = {
    signInWithGoogle,
    isAuth,
    userDetails,
    signOutUser,
    userImage,
    userName,
    userEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default Context;
