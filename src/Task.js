import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

export default class Task extends Component {
  state = {
    temp: "",
    date: ""
  };
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };
  render() {
    console.log(this.state.date._d);
    return (
      <div className="tasklist">
        <p className="task">{this.props.title}</p>
        <h3>{this.props.content}</h3>
        <button onClick={this.props.onEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
