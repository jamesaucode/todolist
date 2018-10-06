import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: this.props.title || "",
    content: this.props.content || ""
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      content: this.state.content
    });
    e.preventDefault();
  };
  render() {
    const buttonText = this.props.id ? "Update" : "Create";
    return (
      <div>
        <form className="tasklist">
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <label>Description</label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          <button onClick={this.handleSubmit}>{buttonText}</button>
          <button onClick={this.props.onFormClose}>Cancel</button>
        </form>
      </div>
    );
  }
}
