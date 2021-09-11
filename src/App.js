import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Feed from './components/Feed';
import Headers from './components/Headers';
import SideBar from './components/SideBar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Login from './pages/Login';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL
          }))
      }
      else{
          dispatch(logout())
      }
    })
    
  }, [])
  return (
      <div className="app">

       
        {/* header  */}
        
        {!user ? <Login /> :
        <>
        <Headers />
         
         <div className="app__body">
         <SideBar />
      
       {/* SideBar  */}
         <Feed />
       {/* Feed   */}

       {/* Widgets    */}
       </div>
        </>
        
        }
       
      
      </div>
  );
}

export default App;
