import React, {useState} from 'react';
import {authService, firebaseInstance} from 'myBase';
const Auth =()=> { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (e)=>{
        const {target: {name, value}} = e;
        if(name ==="email"){
            setEmail(value)
            console.log(name, value)
        }else if (name ==="password"){
            setPassword(value)
            console.log(name, value)

        }
    }
    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithpopup
    const onSubmit = async(e)=>{
        e.preventDefault();
        try{
            let data;
            //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#setpersistence
            if(newAccount){
                //create Account
                //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createuserwithemailandpassword
                data = await authService.createUserWithEmailAndPassword(email, password);
               console.log(data);
            } else{
                //log in
                //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithemailandpassword
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        }catch(err){
            console.log(err.message)
        }
    }
const toggleAccount = ()=> setNewAccount(prev => !prev);
const onSocialClick = async (e) => {
    const {target:{name}} = e;
    let provider;
    if(name ==="google"){
        provider = new firebaseInstance.auth.GoogleAuthProvider();
    }else if(name ==="github"){
        provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider)
    console.log(data);
}

    return (<div>
    <form onSubmit ={onSubmit}>
        <input name = "email" type = "text" placeholder = "Email" required value = {email} onChange = {onChange}/>
        <input name = "password" type = "password" placeholder = "Password" required value = {password} onChange = {onChange}/>
        <input type = "submit" value = {newAccount ? "Create Account": "Log In"}/>
    </form>
    <span onClick={toggleAccount}>
        {newAccount ? "SignIng": "CreateAccount"}
    </span>
    <div>
        <button onClick ={onSocialClick} name = "google">Continue With Google</button>
        <button onClick ={onSocialClick} name = "github">Continue With GitHub</button>
    </div>
</div>)}

export default Auth;