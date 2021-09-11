import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import classes from "./Login.module.css";
import linkedInlogo from '../assets/linkedIn.jpg'
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // const [name, setname] = useState('')
    // const [profilePic, setprofilePic] = useState('')
    const dispatch = useDispatch()
    // const register=()=>{
    //     if(!name){
    //         return alert("please enter your full Name")

    //     }
       
    //         auth.createUserWithEmailAndPassword(email,password).then(
    //             userAuth=>{
    //                 userAuth.user.updateProfile({
    //                     displayName:name,
    //                     photoURL:profilePic
                        
    //                 }).then(()=>{
    //                         dispatch(login({
    //                             email:userAuth.user.email,
    //                             uid:userAuth.user.uid,
    //                             displayName:name,
    //                             photoURL:profilePic
    //                         }))
    //                 })
    //             }
    //         ).catch(err=>alert(err.message))
    //     }

    

    const loginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email:userAuth.email,
                uid:userAuth.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL

            }))
        }).catch(err=>alert(err.message))
        // auth

    }
  return <div className={classes.login}>
      <img src={linkedInlogo} alt="" />
      <form onSubmit={loginToApp}>
          {/* <input type="text" value={name} placeholder="Full Name (required if registering)" onChange={
              e=>setname(e.target.value)
          } />
          <input type="text" placeholder="Profile Pic Url  (Optional)" value={profilePic} onChange={e=>setprofilePic(e.target.value)} /> */}
          <input type="email" value={email} placeholder="Email" onChange={e=>setemail(e.target.value)} />
          <input type="password" value={password} placeholder="Password" onChange={e=>setpassword(e.target.value)} minLength="6" />
            <button type="submit" >
                Sign In
            </button>


      </form>
        <p>Not a member?</p>
        {/* <span className={classes.login__register} > */}
            
            <NavLink className={classes.login__register} to='/register' style={{ textDecoration: "none" }}>
            Register Now
            </NavLink>
        {/* </span> */}

  </div>
};

export default Login;
