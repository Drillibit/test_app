import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../../actions/task';
import MainFrom from '../MainForm';

const EditTask = props => {
  return (
    <Fragment>
      <MainFrom
        onSubmit={task => {
          props.dispatch(editTask(task));
        }}
      />
    </Fragment>
  );
};

export default connect()(EdtiTask);
