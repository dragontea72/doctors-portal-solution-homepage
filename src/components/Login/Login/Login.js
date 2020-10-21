import React, { useContext } from 'react';
import LoginBg from '../../../images/LoginBg.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

//firebase.initializeApp(firebaseConfig);

const Login = () => {

      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      const {form} = location.state || {from: {pathname: '/'}};

      if(firebase.apps.length === 0){
          firebase.initializeApp(firebaseConfig);
      }

        const handleGoogleSignIn = () => {
            var GoogleProvider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(GoogleProvider).then(function(result) {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName,  email}
                setLoggedInUser(signedInUser);

                history.replace(form);
              }).catch(function(error) {
                const errorMessage = error.message;
                console.error(errorMessage);
              
              });
        }

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{height:"100vh"}}>
               <div className="col-md-6 shadow p-5">
                   <div className="form-group">
                       <label htmlFor="">User Name</label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group">
                       <label htmlFor="">Password</label>
                       <input type="password" className="form-control" />
                   </div>
                   <div className="form-group">
                       <label className="text-danger" htmlFor="">Forgot your password</label>
                   </div>
                   <div className="form-group mt-5">
                      <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Sign in</button>
                   </div>
               </div>
               <div className="col-md-6 d-none d-md-block align-self-end">
                <img className="img-fluid" src={LoginBg} />
               </div>

            </div>
            
        </div>
    );
};

export default Login;