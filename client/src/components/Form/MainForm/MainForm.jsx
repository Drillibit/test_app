import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Main.css';

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: props.taskName ? props.taskName : '',
      taskDescription: props.taskDescription ? props.taskDescription : '',
      taskImportance: props.taskImportance ? props.taskImportance : 'regular',
      startDate: props.startDate ? moment(props.startDate) : moment(),
      deadline: props.deadline ? moment(props.deadline) : moment(),
      taskDone: props.taskDone === undefined ? false : props.taskDone,
      edit: false,
      dateFocused: false,
      noDeadline: false,
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
        startDate: this.state.startDate.valueOf(),
        taskDone: this.state.taskDone,
        noDeadline: this.state.noDeadline
      };
      this.props.onSubmit(task);
      this.props.done && this.props.done();
    }
  };
  render() {
    const {
      taskName,
      taskDescription,
      taskImportance,
      deadline,
      dateFocused,
      noDeadline
    } = this.state;

    return (
      <div className="form_container">
        <form onSubmit={this.onSubmit}>
          <div className="form_group">
            <input
              type="text"
              name="taskName"
              placeholder="Задача"
              value={taskName}
              onChange={this.onTextFieldChange}
            />
            <input
              type="text"
              name="taskDescription"
              placeholder="Описане"
              value={taskDescription}
              onChange={this.onTextFieldChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="taskImportance">Важность задачи:</label>
            <select
              name="taskImportance"
              value={taskImportance}
              onChange={this.onTextFieldChange}
            >
              <option value="regular">Обычная</option>
              <option value="important">Важная</option>
              <option value="highly_important">Очень важная</option>
            </select>
          </div>

          <div className="form_group">
            <label htmlFor="noDeadline">Без срока</label>
            <div className="checkbox">
              <input
                name="noDeadline"
                type="checkbox"
                checked={noDeadline}
                onChange={this.onTextFieldChange}
              />
            </div>
          </div>

          <div className={`form_group ${noDeadline && `inactive`}`}>
            <label htmlFor="deadline">Срок выполнения</label>
            <SingleDatePicker
              date={deadline}
              onDateChange={this.onDateChange}
              focused={dateFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
            />
          </div>

          <button className="btn submit">Добавить</button>
          {this.props.button}
        </form>
      </div>
    );
  }
}
