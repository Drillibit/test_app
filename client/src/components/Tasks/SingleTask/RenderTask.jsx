import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startRemoveTask } from '../../../actions/task';

const RenderTask = ({
  taskName,
  taskMissed,
  taskDescription,
  deadline,
  handleEdit,
  dispatch,
  handleTaskComplete,
  taskComplete,
  taskDoneDate,
  _id
}) => {
  let date = new Date(deadline).toLocaleDateString().toString();
  return (
    <Fragment>
      <h3>{taskName}</h3>
      <p>{taskMissed ? 'Срок истёк' : 'Задача актульна'}</p>
      <p>{taskDescription}</p>
      {(!taskComplete && <p>{date}</p>) || (
        <p>{new Date(taskDoneDate).toLocaleString()}</p>
      )}
      <input
        name="taskComplete"
        type="checkbox"
        checked={taskComplete}
        onChange={handleTaskComplete}
      />
      <button onClick={handleEdit}>Редактировать</button>
      <button
        onClick={() => {
          dispatch(startRemoveTask({ _id }));
        }}
      >
        Удалить
      </button>
    </Fragment>
  );
};

export default connect()(RenderTask);
