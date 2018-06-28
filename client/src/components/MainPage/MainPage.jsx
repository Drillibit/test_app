import React from 'react';
import AddTask from '../Form/AddTask';
import TasksPage from '../Tasks';
import Filter from '../Filter';

const MainPage = props => {
  return (
    <div className="main_page">
      <Filter />
      <TasksPage />
      <AddTask />
    </div>
  );
};

export default MainPage;
