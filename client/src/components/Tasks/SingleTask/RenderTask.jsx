import React from 'react';
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
  taskImportance,
  noDeadline,
  _id
}) => {
  let date = new Date(deadline).toLocaleDateString().toString();
  const importance = () => {
    switch (taskImportance) {
      case 'important':
        return 'важная';
      case 'highly_important':
        return 'очень важная';
      default:
        return 'обычная';
    }
  };
  return (
    <div className={`task_card ${taskMissed ? 'missed' : 'active'}`}>
      <h3>
        {taskName} {importance()}
      </h3>
      <p>{taskMissed ? 'Срок истёк' : 'Задача актульна'}</p>
      <p>{taskDescription}</p>
      {!noDeadline && (
        <div>
          {(!taskComplete && <p>{date}</p>) || (
            <p>{new Date(taskDoneDate).toLocaleString()}</p>
          )}
        </div>
      )}
      <label htmlFor="taskComplite">Задача выполнена</label>
      <input
        name="taskComplete"
        type="checkbox"
        checked={taskComplete}
        onChange={handleTaskComplete}
      />
      <div className="btn_group">
        <button className="card_btn edit" onClick={handleEdit}>
          Редактировать
        </button>
        <button
          className="card_btn delete"
          onClick={() => {
            dispatch(startRemoveTask({ _id }));
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default connect()(RenderTask);
