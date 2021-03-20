import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import firebaseConfig from "./firebase.config"
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }



    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: ''
    })
    const [newUser, setNewUser] = useState(false);

    //google sign in firebase 
    const handleGoogleSingIN = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var { displayName } = result.user;
                const signedInUser = { name: displayName }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const handleChange = (e) => {
        let isFiledValid = true;
        if (e.target.name === 'email') {
            isFiledValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            isFiledValid = e.target.value.length > 6;
        }
        if (isFiledValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            //console.log(newUserInfo);
            setUser(newUserInfo);
        }
    }
    //email and password sign up firebase
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    var { displayName } = userCredential.user;
                    const signedInUser = { name: displayName }
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                    // ...
                })
                .catch((error) => {
                    //handle error 
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    var { displayName } = userCredential.user;
                    const signedInUser = { name: displayName }
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

        }

        e.preventDefault();
    }

    return (
        <div className="loginHeader">
            <h1>{newUser ? 'Create an account' : 'Sign in to your account'}</h1>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"></input>
            <label htmlFor="newUser">New User Sign up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <TextField name="name" onChange={handleChange} id="standard-basic" label="Name" />}
                <br />
                <TextField name="email" onChange={handleChange} id="standard-basic" label="Email" required />
                <br />
                <TextField type="password" name="password" onChange={handleChange} id="standard-basic" label="Password" required />
                <br />
                {newUser && <TextField type="password" name="password" onChange={handleChange} id="standard-basic" label="Confirm Password" />}
                <br /> <br />
                <Button type="submit" variant="contained" color="primary" value=""> {newUser ? 'Create your account' : 'Log In'}</Button>
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully  </p>}
            <br /><br /><br />
            <Button onClick={handleGoogleSingIN} variant="contained" color="primary" disableElevation>
                Google Sign In
            </Button>
        </div>
    );
};

export default Login;