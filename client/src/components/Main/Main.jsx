import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskName: '',
      taskDescription: '',
      taskImportance: '',
      deadline: '',
      startDate: moment(),
      taskDone: false,
      edit: false,
      dateFocused: false
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

  onDateChange = startDate => {
    this.setState(() => ({
      startDate
    }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ dateFocused: focused }));
  };

  render() {
    const {
      taskName,
      taskDescription,
      taskImportance,
      taskDone,
      deadline,
      startDate,
      dateFocused
    } = this.state;

    return (
      <div className="">
        <p>Task App Main Component</p>
        <form>
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
            date={startDate}
            onDateChange={this.onDateChange}
            focused={dateFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
        </form>
      </div>
    );
  }
}
