import NasaImage from './apod';
import './App.css';
import LoginPage from './LoginPage';
import { useEffect, useState } from 'react';
import SignupPage from './SignupPage';


function App() {
  // const [loggedIn, setLoggedIn] = useState({});
  // const [signUpScreen, setSignUpScreen] = useState({});
  const [routeString, setRouteString] = useState({});
  useEffect(() => {
    setRouteString("login");
  }, []);

  if(routeString === "login"){
    return(
      <LoginPage setRouteString={setRouteString}/>
    );
  } else if (routeString === "image"){
    return (
        <NasaImage setRouteString={setRouteString}/>
    );
  } else if (routeString === "signup"){
    return(
      <SignupPage setRouteString={setRouteString}/>
    );
  }
}

export default App;
