import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import EditableTaskList from "./EditableTaskList";
import ToggleTaskForm from "./ToggleTaskForm";
import uuidv1 from "uuid/v1";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

export default class App extends Component {
  state = {
    tasks: [
      {
        title: "Laugh",
        content: "hahahahhahahahah",
        id: uuidv1(),
        createdAt: moment().format("MM/DD/YYYY, h:mm:ss")
      },
      {
        title: "Go to school",
        content: "Bike to school!",
        id: uuidv1(),
        createdAt: moment().format("MM/DD/YYYY, h:mm:ss")
      }
    ]
  };
  handleCreateTask = task => {
    this.createTask(task);
  };

  handleDeleteTask = task => {
    this.deleteTask(task);
  };

  handleEditFormSubmit = edited => {
    this.updateTask(edited);
  };

  deleteTask = taskId => {
    console.log(taskId);
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== taskId)
    });
  };

  updateTask = edited => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (edited.id === task.id) {
          return Object.assign({}, task, {
            title: edited.title,
            content: edited.content
          });
        } else {
          return task;
        }
      })
    });
  };

  createTask = task => {
    const t = {
      title: task.title,
      content: task.content
    };
    this.setState({
      tasks: this.state.tasks.concat(t)
    });
  };

  render() {
    console.log(moment().format("MM/DD/YYYY"));
    return (
      <div className="todolist">
        <h1>A simple todo list</h1>
        <EditableTaskList
          tasks={this.state.tasks}
          onDelete={this.handleDeleteTask}
          onFormSubmit={this.handleEditFormSubmit}
        />
        <ToggleTaskForm isOpen={false} onFormSubmit={this.handleCreateTask} />
        <div />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
