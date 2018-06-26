import React from 'react';
import { connect } from 'react-redux';
import SingleTask from './SingleTask';

const TasksPage = ({ tasks }) => {
  return (
    <div className="task_container">
      {tasks.map((task, index) => <SingleTask key={index} {...task} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(TasksPage);
