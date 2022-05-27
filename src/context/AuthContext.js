import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

// creating context
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  //  required functions are written here (global functions)
    function signUp(email, password) {
      createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, "users", email), {
          savedShows:[]
        });
    }

    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
      return signOut(auth);
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
        setUser(currentuser);
      });
      return () => {
        unSubscribe();
      };
    });

  return (
    //  wrapping the components with contextProvider to pass global data/functions to them
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
        signOut,
        logOut,
        user,
      }}
    >
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
}

// export the whole context as a function
export function UserAuth() {
  return useContext(AuthContext);
}
