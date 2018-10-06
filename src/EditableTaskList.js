import React, { Component } from "react";
import EditableTask from "./EditableTask";

export default class EditableTaskList extends Component {
  render() {
    const tasks = this.props.tasks.map(task => (
      <EditableTask
        key={task.id}
        id={task.id}
        title={task.title}
        content={task.content}
        onDelete={this.props.onDelete}
        onFormSubmit={this.props.onFormSubmit}
      />
    ));
    return <div id="tasks">{tasks}</div>;
  }
}
