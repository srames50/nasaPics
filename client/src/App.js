import NasaImage from './apod';
import './App.css';
import LoginPage from './LoginPage';
import { useEffect, useState } from 'react';
import SignupPage from './SignupPage';


function App() {
  const [routeString, setRouteString] = useState({});
  useEffect(() => {
    setRouteString("login");
  }, []);

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
  } 

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "881316253759-a4040bjv4v3c49s47p0ekvcebddc3ngu.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
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
