import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut,FbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginMenegar';


function Login() {
    const [newUser ,setNewUser] = useState(false)
    const [user , setUser] =useState({
        isSignIn : false,
        name : '',
        email : '',
        photo : '',
        password : '',
    });
//use initializeApp firebase.
    initializeLoginFramework()
//App.js context api userContext
    const [loggedInUser , setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            setUser(res)
            setLoggedInUser(res)
        })
    }
    const googleSignOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, true);
        })
    }
    const handleFb = () => {
        FbSignIn()
        .then(res => {
            handleResponse(res, false);
        })
    }
    //handleResponse function 
    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }
    //form validation
    const handleChange =(e) => {
        let emailValid = true;
            if (e.target.name === 'email'){
              emailValid = /\S+@\S+\.\S+/.test(e.target.value);  
              console.log(emailValid)
        }
        if(e.target.name === "password"){
            const passwordValid = e.target.value.length >= 6;
            emailValid = passwordValid; 
            console.log(passwordValid);
        }
        if(emailValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }
    const handleSubmit= (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
            .then(res => {
                handleResponse(res, true);
            })
        }
        if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                handleResponse(res, true);
            })
        }   
        e.preventDefault();
        
}
    
return (
        <div className = "App">
            <h1> please sign in you account</h1>  
           
                { 
                user.IsSignedIn ? <button onClick={googleSignOut} > Sign out </button> :
                <button onClick={googleSignIn} > Sign In </button> 
                }
                <button onClick ={handleFb}>fb Log in</button>

                {user.IsSignedIn && <div>
                     <h1>welcome to {user.name}</h1>
                     <h1>Email : {user.email}</h1>
                     <img src={user.photo} alt=""/>
                 </div>} 
            <p>Name : {user.name}</p>
            <p>email : {user.email}</p>
            <p>password : {user.password}</p>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id=""/>
                 <label htmlFor="newUser">New User Sign Up </label> <br/>
                 { newUser && <input type="text" name="name" onBlur= {handleChange} placeholder='Enter You name ' required/> } <br/>
                <input type="text" name='email' onBlur={handleChange} placeholder="Enter Your Email" required/> <br/>
                <input type="password" name="password"  onBlur={handleChange} id="" placeholder="Enter Your Email" required/> <br/>
                <input type="submit" value={ newUser ? 'Sign Up' : 'Sign In' }/>
            </form>
                <p style={{color:'red'}}>{user.error}</p>
                {
                 user.success && <p style={{color:'green'}}>User {newUser ? 'Create' : 'Logged In' } successFull</p>
                }
            
        </div>
    );
 }

export default Login;