import React from "react";
import classes from "./Headers.module.css";
import SearchIcon from '@material-ui/icons/Search';
import linkediInLogo from '../assets/linkedin.png'
import HeaderOptions from "./HeaderOptions";
import { AddBox, Home, Message, Notifications, SupervisorAccountRounded } from "@material-ui/icons";
import avatarIcon from '../assets/man.png'
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logout, selectUser } from "../features/userSlice";


const Headers = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className={classes.header}>

      <div className={classes.header__left}>
          <img src={linkediInLogo} alt="" />
          <div className={classes.header__search}>
            <SearchIcon />
              <input type="text" placeholder="search "  />
          </div>

      </div>
      <div className={classes.header__right}>
            <HeaderOptions Icon={Home} title="Home" />
            <HeaderOptions Icon={SupervisorAccountRounded} title="Network" />
            <HeaderOptions Icon={AddBox} title="Jobs" />
            <HeaderOptions Icon={Message} title="Messaging" />
            <HeaderOptions Icon={Notifications} title="Notifications" />
            <HeaderOptions title="Logout" avatar={avatarIcon} onClick={logoutOfApp}  />


      </div>
    </div>
  );
};

export default Headers;
