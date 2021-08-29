import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import Experience from './Experience';

class Main extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <main className="bg-gray-300 h-screen w-screen">
        <BasicInfo />
        <Experience />
      </main>
    );
  }
}

export default Main;
