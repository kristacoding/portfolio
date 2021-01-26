import React, { Component } from "react";
import "./style.css";
import Container from "../Container/Container";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <Container>
          <h1>
            Hello {this.state.firstName} {this.state.lastName}!
          </h1>
          <h2>
            Fill out the form to contact me!
            </h2>
          <form className="form">
            <input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <div class="form-group">
              <label for="exampleFormControlSelect2">Reason for reaching out (click 'ctrl' to select multiple):</label>
              <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>I need SEO Services</option>
                <option>I am looking for a Full Stack Developer</option>
                <option>I want both SEO and Full Stack Development assistance</option>
                <option>I am interested in talking about hiking</option>
                <option>Other</option>
              </select>
              <label for="exampleFormControlTextarea1">Leave additional Message here:</label>
              <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="Please add information about your company and your company's website!">
              </input>
            </div>
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Form;
