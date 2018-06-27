import React from 'react';
import AddTask from '../Form/AddTask';
import TasksPage from '../Tasks';
import Filter from '../Filter';
const MainPage = props => {
  return (
    <div className="main_page">
      <p>Main page component</p>
      <Filter />
      <TasksPage />
      <AddTask />
    </div>
  );
};

export default MainPage;
