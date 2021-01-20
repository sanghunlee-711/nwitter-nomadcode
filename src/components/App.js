import React,{useEffect, useState} from 'react';
import AppRouter from 'components/Router'
import {authService} from 'myBase';

//https://firebase.google.com/docs/reference/js/firebase.auth.EmailAuthProvider

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
  useEffect(()=>{
    //keep track state of auth
    authService.onAuthStateChanged((user)=> {
      if(user){
        setUserObj(user)
      }
      setInit(true)
    }

    );
  },[])


  //Boolean(userObj) -> check userObj state so that delete isLoggedIn State
  return (
    <div>
      {init ? <AppRouter userObj = {userObj} isLoggedIn ={Boolean(userObj)}/> : "Initializing...."}
      {/* <footer>
        &copy; By Sanghun with Nomad Code {new Date().getFullYear()}
      </footer> */}
    </div>
  );
}

export default App;
