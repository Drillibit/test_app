import React from 'react';
import AddTask from '../Form/AddTask';
import TasksPage from '../Tasks';
const MainPage = props => {
  return (
    <div className="main_page">
      <p>Main page component</p>
      <TasksPage />
      <AddTask />
    </div>
  );
};

export default MainPage;
