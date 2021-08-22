import React, { Component } from "react";
import imageIcon from "../assets/image.png";

class Photo extends Component {
  render() {
    return (
      <div className="h-5/6 object-contain p-3 w-1/6 flex flex-col justify-center items-center">
          <img src={imageIcon} className="h-5/6" />
          <input type="file" className="m-auto" />
      </div>
    );
  }
}

export default Photo;
