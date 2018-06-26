import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startAddTask } from '../../../actions/task';
import MainForm from '../MainForm';

const AddTask = props => {
  return (
    <Fragment>
      <MainForm
        onSubmit={task => {
          props.dispatch(startAddTask(task));
        }}
      />
    </Fragment>
  );
};

export default connect()(AddTask);
