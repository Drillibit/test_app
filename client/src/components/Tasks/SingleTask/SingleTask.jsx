import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { startEditTask } from '../../../actions/task';
import moment from 'moment';

let currentDate = moment().valueOf();

class SingleTask extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      taskComplete: this.props.taskDone,
      taskMissed: moment(currentDate).isAfter(this.props.deadline)
    };
  }

  handleTaskComplete = e => {
    let name = e.target.name;
    let value = e.target.checked;
    this.setState(() => ({
      [name]: value
    }));
    const {
      taskName,
      taskDescription,
      taskImportance,
      deadline,
      startDate
    } = this.props;
    let updates = {
      taskName,
      taskDescription,
      taskImportance,
      deadline,
      startDate,
      taskDone: !this.state.taskComplete
    };
    this.props.dispatch(startEditTask(this.props._id, updates));
  };
  render() {
    const { taskName, taskDescription, deadline } = this.props;
    const { taskComplete, taskMissed } = this.state;
    let date = new Date(deadline).toLocaleDateString().toString();

    return (
      <div className="single_task">
        <h3>{taskName}</h3>
        {taskMissed ? <p>Срок истёк</p> : <p>Задача актульна</p>}
        <p>{taskDescription}</p>
        <p>{date}</p>
        <input
          name="taskComplete"
          type="checkbox"
          checked={taskComplete}
          onChange={this.handleTaskComplete}
        />
      </div>
    );
  }
}

export default connect()(SingleTask);
