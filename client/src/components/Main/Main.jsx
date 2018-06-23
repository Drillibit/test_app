import React, { Component } from 'react';
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
      taskDone: false,
      edit: false
    };
  }

  onTextFieldChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { taskName, taskDescription, taskImportance, taskDone } = this.state;
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
          <input name="taskDone" type="checkbox" checked={taskDone} />
        </form>
      </div>
    );
  }
}
