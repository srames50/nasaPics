import axios from 'axios';
import React from 'react';
import './apod.css';

class NasaImage extends React.Component{
  state = {
    imageUrl: '',
    description: '',
    date: ''
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
            </div>
      </div>

    );
  }

}


export default NasaImage;
