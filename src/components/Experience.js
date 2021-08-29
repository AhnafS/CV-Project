import React, { Component } from "react";
import uniqid from "uniqid";
import ExperienceLoader from "./ExperienceLoader";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: [],
      position: "",
      company: "",
      desc: "",
      id: uniqid(),
      startDate: "",
      endDate: ""
    };
  }

  companyHandler = (e) => {
    this.setState({
      company: e.target.value
    })
  };

  positionHandler = (e) => {
    this.setState({
      position: e.target.value
    })
  };

  descriptionHandler = (e) => {
    this.setState({
      desc: e.target.value
    })
  };

  startDateHandler = e => {
    this.setState({
      startDate: e.target.value
    })
  }

  endDateHandler = e => {
    this.setState({
      endDate: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      experience: this.state.experience.concat({
        company: this.state.company,
        position: this.state.position,
        desc: this.state.desc,
        id: uniqid(),
        startDate: this.state.startDate,
        endDate: this.state.endDate
      }),
      company: "",
      position: "",
      desc: "",
      startDate: "",
      endDate: ""
    })
    console.log(this.state.experience);
    console.log('it worked')
  };

  render() {
    return (
      <div className="w-full ml-5 mt-5 flex justify-center flex-col">
        <ExperienceLoader experience={this.state.experience} />
        <form onSubmit={this.submitHandler} className="flex space-x-6 w-full">
          <div className="flex flex-col space-y-3 w-3/4">
            <input
              type="text"
              onChange={this.companyHandler}
              placeholder="Enter Company Name"
              className="p-1.5 bg-transparent rounded-sm focus:bg-gray-50"
              value={this.state.company}
            />
            <input
              type="text"
              onChange={this.positionHandler}
              placeholder="Enter Compnay Position"
              className="p-1.5 bg-transparent rounded-sm focus:bg-gray-50"
              value={this.state.position}
            />
            <input
              type="text"
              onChange={this.descriptionHandler}
              placeholder="Enter Company Discription"
              className="p-1.5 bg-transparent rounded-sm focus:bg-gray-50"
              value={this.state.desc}
            />
          </div>
          <div className="flex flex-col w-1/6">
            <label>Start Date: </label>
            <input
              type="date"
              className="p-1 bg-transparent focus:bg-gray-50"
              onChange={this.startDateHandler}
              value={this.state.startDate}
            />

            <label className="mt-2">End Date: </label>
            <input
              type="date"
              className="p-1 bg-transparent focus:bg-gray-50"
              onChange={this.endDateHandler}
              value={this.state.endDate}
            />
          </div>
        </form>
        <button onClick={this.submitHandler} className="">Submit</button>
      </div>
    );
  }
}

export default Experience;
