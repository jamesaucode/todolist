import React, { Component } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

export default class EditableTask extends Component {
  state = {
    editing: false
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = task => {
    this.props.onFormSubmit(task);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editing: false });
  };

  openForm = () => {
    this.setState({ editing: true });
  };
  render() {
    if (this.state.editing) {
      return (
        <TaskForm
          title={this.props.title}
          content={this.props.content}
          id={this.props.id}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Task
          title={this.props.title}
          content={this.props.content}
          id={this.props.id}
          onDelete={this.props.onDelete}
          onEdit={this.handleEditClick}
        />
      );
    }
  }
}
