import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

const SignupPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    useEffect(() => {
        setEmail('');
        setPassword('');
        setVerifyPassword('');
      }, []);

      function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        props.setRouteString("image");
    
      } 
    
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: "881316253759-a4040bjv4v3c49s47p0ekvcebddc3ngu.apps.googleusercontent.com",
          callback: handleCallbackResponse
        });
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme: "outline", size: "large"},
        );
        
      }, []);

      const onSubmit= (e) => {
        e.preventDefault();
        if(password === verifyPassword){
            const tempObj = {
                email: email,
                password: password
            }
            console.log(tempObj);
            axios.post('http://localhost:8080/user/add', tempObj)
               .then(res => console.log(res.data))
               .catch(err => console.log(err));
            setEmail("")
            setPassword("")
            setVerifyPassword("");
            props.setRouteString("login");
        } else {
            alert("Passwords do not match");
        }
      }
    

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeVerifyPassword = (e) => {
        setVerifyPassword(e.target.value);
    }



    return (
        <div>
          <h1 className='newJSTitle'>Create a New Account</h1>
          <div className="row">
            <div className="col-sm-5">
              <form onSubmit={onSubmit}>
                <div className="form-group1">
                  <label className="input-headers">Email: </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
                <div className="form-group1">
                  <label className="input-headers">Password: </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={password}
                    onChange={onChangePassword}
                  />
                </div>
                <div className="form-group1">
                  <label className="input-headers">Verify Password: </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={verifyPassword}
                    onChange={onChangeVerifyPassword}
                  />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Account" className="createAcct" />
                </div>
                <div id='signInDiv'></div>
                <br />
              </form>
            </div>
            <div className="col-sm-4"> 
            </div>
          </div>
        </div>
      );
}



export default SignupPage;