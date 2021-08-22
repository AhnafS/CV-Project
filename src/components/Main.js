import React, { Component } from "react";
// import Sidebar from "./Sidebar";
import BasicInfo from "./BasicInfo";

class Main extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <main className="bg-gray-300 h-screen w-screen">
        <BasicInfo />
      </main>
    );
  }
}

export default Main;
