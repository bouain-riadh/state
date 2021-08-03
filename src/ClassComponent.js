import React, { Component } from "react";
import profile from "./profile.JPG";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Do",
      age: 30,
      bio: "Being myself – Everyone else is taken",      
      profession: "web developper",
      show: false,

    //   input:0
    };
  }
  render() {
    const ShowFun = () => {
      this.setState({ show: !this.state.show });
    };
    const add = () => {
      this.setState({ input: this.state.input+1 });
    };
    return (
      <div className="container">
        {this.state.show ? (
          <p>
            my name is {this.state.name} and my age is {this.state.age} and i am {this.state.profession}<br></br>
            {this.state.bio} <br></br><img src={profile} id="img-change" alt={this.state.imageAlt} width="300px"/>  
          </p>
        ) : null}
        {/* <h2>+</h2>
        <h2>-</h2>
            <p>{this.state.input}</p> */}
    
        {/* <button onClick={add}>plus</button> */}
        <button onClick={ShowFun}>Click me</button>
      </div>
    );
  }
}
