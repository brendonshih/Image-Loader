import React from "react";

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);

    // Setting state.loaded to false when the component first loads
    this.state = {
      loaded: false
    };
  }
  
  // Once image is fully loaded, it runs setState to change state.loaded to true,
  // which will remove the "loading" class, causing the 'display: none;' to no longer apply and making the image appear
  onImageLoaded() {
    return () => {
      this.setState({
        loaded: true
      });
    };
  }

  // Returns a placeholder image if state.loaded == false
  // Once loaded == true, the placeholder image return null and the image will disappear
  getPlaceholderImage() {
    return this.state.loaded ? null : <img src={this.props.placeholder} />;
  }

  // Returns the image element. While state.loaded is false, the element is given the className 'loading'
  // which is used to apply 'display: none;' styling to hide the element.
  // Once image is fully loaded, this.onImageLoaded is called which will update the state to loaded == true,
  // which removes the 'loading' class and makes the image appear on screen
  getImage() {
    return (
      <img
        className={`image ${this.state.loaded ? "" : "loading"}`}
        src={this.props.image}
        onLoad={this.onImageLoaded()}
      />
    );
  }

  // Returns the wrapped image container element which includes both the placeholder and the full image elements
  render() {
    return (
      <div className="image-container">
        {this.getPlaceholderImage()}

        {this.getImage()}
      </div>
    );
  }
}

export default ImageLoader;
