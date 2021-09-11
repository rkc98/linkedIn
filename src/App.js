// import { Widgets } from '@material-ui/icons';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import "./App.css";
import Feed from "./components/Feed";
import Headers from "./components/Headers";
import SideBar from "./components/SideBar";
import Widgets from "./components/Widgets";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/* header  */}

      {!user ? (
        <>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </>
      ) : (
        <>
          <Headers />

          <div className="app__body">
            <SideBar />

            {/* SideBar  */}
            <Feed />
            {/* Feed   */}
            <Widgets />
            {/* Widgets    */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
