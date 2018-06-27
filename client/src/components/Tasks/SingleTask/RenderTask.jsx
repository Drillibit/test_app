import React, { Fragment } from 'react';

const RenderTask = ({
  taskName,
  taskMissed,
  taskDescription,
  deadline,
  handleEdit
}) => {
  let date = new Date(deadline).toLocaleDateString().toString();
  return (
    <Fragment>
      <h3>{taskName}</h3>
      <p>{taskMissed ? 'Срок истёк' : 'Задача актульна'}</p>
      <p>{taskDescription}</p>
      <p>{date}</p>
      <input
        name="taskComplete"
        type="checkbox"
        checked={this.taskComplete}
        onChange={this.handleTaskComplete}
      />
      <button onClick={handleEdit}>Редактировать</button>
    </Fragment>
  );
};

export default RenderTask;
