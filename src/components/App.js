import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'myBase';

//https://firebase.google.com/docs/reference/js/firebase.auth.EmailAuthProvider

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
  useEffect(() => {
    //keep track state of auth
    authService.onAuthStateChanged(user => {
      if (user) {
        //1
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: args => user.updateProfile(args),
        });
        //2
        // setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    console.log(authService.currentUser.displayName);
    //아래와 같이 하면 객체 크기가 너무 크니까 리액트가 판단하기까지 시간이 오래걸려서 렌더결정이 되지 않는문제가 발생함.
    // setUserObj(authService.currentUser);

    //1
    //이렇게 하면 더 작은 특정요소들을 가져와서 넣기 때문에 판단이 빨라지므로 렌더 시 변경되는 것이 그대로 나타난다.(virtual dom성능을 생각해야하나보다)
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: args => user.updateProfile(args),
    });

    //2 객체 전체를 바꿔버리니까 바뀌었다고 판단하고 렌더를 곧바로 리렌더 시켜버림(에러많으므로 자제)
    // setUserObj(Object.assign({}, user));
  };
  //Boolean(userObj) -> check userObj state so that delete isLoggedIn State
  return (
    <div>
      {init ? (
        <AppRouter refreshUser={refreshUser} userObj={userObj} isLoggedIn={Boolean(userObj)} />
      ) : (
        'Initializing....'
      )}
      {/* <footer>
        &copy; By Sanghun with Nomad Code {new Date().getFullYear()}
      </footer> */}
    </div>
  );
}

export default App;
