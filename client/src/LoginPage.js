import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);
  
  useEffect(() => {
    axios.get("http://localhost:8080/user")
        .then(res => {
            setAllUsers(res.data.map(item => [item.email, item.password]));
        })
  }, []);

  const onChangeEmail = e => {
    setEmail(e.target.value.trim());
  }

  const onChangePassword = e => {
    setPassword(e.target.value);
  }

  const onSubmit = e => {
    let successful = false;
    for(let i = 0; i < allUsers.length; i++) {
        if(allUsers[i][0] === email) {
            console.log("user exists");
            if(allUsers[i][1] === password) {
                successful = true;
                console.log("Successful login");
                props.setRouteString("image");
            } else {
                alert("invalid password");
            }
        }
    }
    if(!successful) {
        alert("invalid email")
    }
  }

  const goToSignUp = () => {
    props.setRouteString("signup");
  }

  return (
    <div>
     <h1 className='loginPageTitle'>Login </h1>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <input  type="text"
             required
             className="form-control"
             value={email}
             onChange={onChangeEmail}
             placeholder="Enter your email"
             />
       </div>
       <div className="form-group">
         <label> </label>
         <input type="text"
             required
             className="form-control"
             value={password}
             onChange={onChangePassword}
             placeholder="Enter your password"
             />
       </div>
       <br/>
       <div className="form-group">
         <input type="submit" value="Log In" className="login-button" />
       </div>
     </form>
     <br/>
     <p className='dontHave'>Don't have an account yet?</p>
     <Button className='donthave-button'onClick={goToSignUp}>Sign Up Here</Button>
    </div>

  )
}

export default LoginPage;