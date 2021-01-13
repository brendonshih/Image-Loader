import React from 'react';

import './App.css';
import ImageLoader from './ImageLoader';

class App extends React.Component {

  render() {
    // URLs used for the placeholder and full-sized image
    var placeholderUrl = "https://forge-homework.s3.amazonaws.com/thumb.jpg";
    var imageUrl = "https://forge-homework.s3.amazonaws.com/fullsize.jpg";

    return (
      <div className="App">
        <header className="App-header">Image-Loader Component</header>

        {/* loading the ImageLoader component here, passing in placeholder and image URLs as props */}
        <ImageLoader
          placeholder={ placeholderUrl }
          image={ imageUrl }
        ></ImageLoader>
      </div>
    );
  
  }
}

export default App;
