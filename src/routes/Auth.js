import React from 'react';
import {authService, firebaseInstance} from 'myBase';
import AuthForm from 'components/AuthForm'
const Auth =()=> { 



const onSocialClick = async (e) => {
    const {target:{name}} = e;
    let provider;
    if(name ==="google"){
        provider = new firebaseInstance.auth.GoogleAuthProvider();
    }else if(name ==="github"){
        provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider)
}

    return (
        <>
        <AuthForm />
    <div>
        <div>
            <button onClick ={onSocialClick} name = "google">Continue With Google</button>
            <button onClick ={onSocialClick} name = "github">Continue With GitHub</button>
        </div>
    </div>
    </>
)}

export default Auth;