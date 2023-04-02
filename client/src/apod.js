import axios from 'axios';
import React from 'react';
import './apod.css';
import { Button } from 'react-bootstrap';

class NasaImage extends React.Component{
  constructor(props){
    super(props)
    this.signOut = this.signOut.bind(this);
    this.state = {
      imageUrl: '',
      description: '',
      date: ''
    }
  }

  signOut(){
    this.props.setRouteString('login');
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=SxZFihpT7C48jSZN24cJG9dpXDGQpRImSeQYu3YM`)
      .then(nasaImage => {
        this.setState({
          imageUrl: nasaImage.data.url,
          description: nasaImage.data.explanation,
          date: nasaImage.data.date
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    return(
      <div>
        <h1 className='title'> NASA Astronomy Picture of the Day {this.state.date}</h1>
            <div className='container'>
                <img src={this.state.imageUrl} alt="APOD"/>
                <p className='description'> {this.state.description}</p>
                <Button onClick={this.signOut}>Sign out</Button>
            </div>
      </div>

    );
  }

}


export default NasaImage;
