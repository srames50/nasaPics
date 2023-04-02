import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';




const SignupPage = (setRouteString) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    useEffect(() => {
        setEmail('');
        setPassword('');
        setVerifyPassword('');
      }, []);

  return (
    <div>SignupPage</div>
  )
}



export default SignupPage;