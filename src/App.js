import React, { Component } from 'react';

import './App.css';


class ImageLoader extends Component {
  constructor(props) {
    super(props);

    // Setting state.loaded to false when the component first loads
    this.state = {
      loaded: false,
    }
  }

  render() {
    return (
      <div className="image-container">
        {
          // Load the placeholder image until the component state is changed to loaded == true
          // Once loaded == true, the placeholder image will be removed
          this.state.loaded ? null : <img src={ this.props.placeholder } />
        }
        
        <img
          // If component state.loaded == false, set class of image to 'loading' which is styled with 'display: none;'.
          className={`image ${ this.state.loaded ? "" : "loading" }`}
          src={this.props.image}
          // Once image is fully loaded, it runs setState to change state.loaded to true,
          // which will remove the "loading" class, causing the 'display: none;' to no longer apply and making the image appear
          onLoad={() => { this.setState({ loaded: true }) }}
        />
      </div>
    );
  }
}

class App extends Component {

  render() {
    var placeholderUrl = "https://forge-homework.s3.amazonaws.com/thumb.jpg";
    var imageUrl = "https://forge-homework.s3.amazonaws.com/fullsize.jpg";

    return (
      <div className="App">
        <header className="App-header">Image-Loader Component</header>

        {/* loading the ImageLoader component here, passing in placeholder and image URLs as props */}
        <ImageLoader
          placeholder={placeholderUrl}
          image={imageUrl}
        ></ImageLoader>
      </div>
    );
  
  }
}

export default App;
