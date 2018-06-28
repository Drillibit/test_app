import React from 'react';
import { connect } from 'react-redux';
import SingleTask from './SingleTask';
import filtered from '../../selector/select';
import './TaskPage.css';

const TasksPage = ({ tasks }) => {
  return (
    <div className="task_container">
      {tasks.map((task, index) => <SingleTask key={task._id} {...task} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: filtered(state.tasks, state.filter)
  };
};

export default connect(mapStateToProps)(TasksPage);
