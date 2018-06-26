import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Main.css';

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskName: '',
      taskDescription: '',
      taskImportance: '',
      startDate: moment(),
      deadline: moment(),
      taskDone: false,
      edit: false,
      dateFocused: false,
      error: ''
    };
  }

  onTextFieldChange = e => {
    const { name } = e.target;
    let value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  };

  onDateChange = deadline => {
    if (deadline) {
      this.setState(() => ({
        deadline
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ dateFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.taskDescription || !this.state.taskName) {
      this.setState({
        error: 'Название и описание задачи должны быть указаны.'
      });
    } else {
      this.setState({
        error: ''
      });
      const task = {
        taskName: this.state.taskName,
        taskDescription: this.state.taskDescription,
        taskImportance: this.state.taskImportance,
        deadline: this.state.deadline.valueOf(),
        startDate: this.state.startDate.valueOf()
      };
      this.props.onSubmit(task);
    }
  };
  render() {
    const {
      taskName,
      taskDescription,
      taskImportance,
      taskDone,
      deadline,
      dateFocused
    } = this.state;

    return (
      <div className="">
        <p>Task App Main Component</p>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="taskName">Задача</label>
          <input
            type="text"
            name="taskName"
            value={taskName}
            onChange={this.onTextFieldChange}
          />
          <label htmlFor="taskDescription">Описание</label>
          <input
            type="text"
            name="taskDescription"
            value={taskDescription}
            onChange={this.onTextFieldChange}
          />
          <label htmlFor="taskImportance">Важность задачи</label>
          <select
            name="taskImportance"
            value={taskImportance}
            onChange={this.onTextFieldChange}
          >
            <option value="regular">Обычная</option>
            <option value="important">Важная</option>
            <option value="highly_important">Очень важная</option>
          </select>
          <label htmlFor="taskDone">Сделано</label>
          <input
            name="taskDone"
            type="checkbox"
            checked={taskDone}
            onChange={this.onTextFieldChange}
          />
          <label htmlFor="deadline">Срок выполнения</label>
          <SingleDatePicker
            date={deadline}
            onDateChange={this.onDateChange}
            focused={dateFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
