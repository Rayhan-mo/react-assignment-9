
import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import HotelDetail from '../HotelDetail/HotelDetail';

firebase.initializeApp(firebaseConfig);
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    newUser:false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const [signedInUser, setSignedInUser] = useContext(UserContext);

  const  googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignIn = () => {
      firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const {displayName, photoURL, email} = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          
        }
        setUser(signedInUser);
        
        
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }



  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('fb user after sign in', user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }


  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          photo: '',
          email: '',
          error: '',
          success: false
        }
        setUser(signedOutUser);
    })
    .catch(err => {

    })
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S/.test(e.target.value);
    }
    if (e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 3;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber
    }
    if (isFieldValid) {
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  
  const handleSubmit = (e) => {
    // console.log(user.email, user.password)
     if (newUser &&  user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setSignedInUser(newUserInfo);
        history.replace(from);
        setUser(newUserInfo);
      })
      .catch (error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        updateUserName(user.name);
      });
     }
   
     if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setSignedInUser(newUserInfo);
        history.replace(from);
        console.log('sign in user info', res.user);
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
     }

     e.preventDefault();
  }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }


  return (
    <div style={{textAlign: 'center'}} className="app">
          <h1 className="header">Create an account:</h1>
        <form className="form"  onSubmit={handleSubmit}>
            <input type="checkbox" onChange={() => setNewUser(!newUser)}  name="newUser" id=""/>
            <label htmlFor="newUser" style={{color: 'black'}}>New User Sign up</label>
            <br/>
            {newUser && <input type="name" onBlur={handleBlur} name="first name" placeholder="First name" required/>}
            <br/>
            {newUser && <input type="name" onBlur={handleBlur} name="last name" placeholder="Last name" required/>}
            <br/>
            <input type="email" onBlur={handleBlur} name="email" placeholder="Your Email address" required/>
            <br/>
            <input type="password" onBlur={handleBlur} name="password" placeholder="Your password" required/>
            <br/>
            <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
            <button type="submit" onClick={handleSignIn}>Continue with Google</button>
        </form>

        <p style={{color: 'red'}}>{user.error}</p>

        {user.success && 
        <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} successfully</p>
        }
        {
          user.isSignedIn ? <button class="btn btn-warning" onClick={handleSignOut}>Sign out</button> : ''
        }
          
        
         
        

        <button onClick={handleFbSignIn} class="btn btn-warning">Continue with Facebook</button>
        <br/>
        {
          user.isSignedIn && <div>
           
            <p style={{color: 'black'}}>Your email: {user.email}</p>
            
          </div>
        }
      
    </div>
  );
}

export default Login;