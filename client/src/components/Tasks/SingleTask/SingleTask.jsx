import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { startEditTask } from '../../../actions/task';
import RenderTask from './RenderTask';
import MainFrom from '../../Form/MainForm';
import moment from 'moment';

let currentDate = moment().valueOf();

class SingleTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskComplete: this.props.taskDone,
      taskMissed: moment(currentDate).isAfter(this.props.deadline),
      editTask: false
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

  handleEdit = e => {
    this.setState(() => ({
      editTask: !this.state.editTask
    }));
  };
  render() {
    const toRender = { ...this.props, ...this.state };

    return (
      <div className="single_task">
        {!this.state.editTask ? (
          <RenderTask {...toRender} handleEdit={this.handleEdit} />
        ) : (
          <Fragment>
            <MainFrom
              {...toRender}
              button={<button onClick={this.handleEdit}>Назад</button>}
              done={this.handleEdit}
              onSubmit={task => {
                this.props.dispatch(startEditTask(toRender._id, task));
              }}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default connect()(SingleTask);
