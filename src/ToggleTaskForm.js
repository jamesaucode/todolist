import React, { Component } from "react";
import TaskForm from "./TaskForm";

export default class ToggleTaskForm extends Component {
  state = {
    isOpen: false
  };

  openForm = () => {
    this.setState({
      isOpen: true
    });
  };

  handleFormClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleFormSubmit = task => {
    this.props.onFormSubmit(task);
    this.setState({
      isOpen: false
    });
  };
  render() {
    if (this.state.isOpen) {
      return (
        <TaskForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <button className="btn" onClick={this.openForm}>
          <i className="fa fa-plus-square large-icon" aria-hidden="true" />
        </button>
      );
    }
  }
}
