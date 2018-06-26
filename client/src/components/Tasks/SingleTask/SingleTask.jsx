import React from 'react';

const SingleTask = ({ taskName, taskDescription, deadline }) => {
  let date = new Date(deadline).toLocaleDateString().toString();
  return (
    <div className="single_task">
      <h3>{taskName}</h3>
      <p>{taskDescription}</p>
      <p>{date}</p>
    </div>
  );
};

export default SingleTask;
