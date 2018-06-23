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

  render() {
    return <div className="app_wrapper">Task App Main Component</div>;
  }
}
