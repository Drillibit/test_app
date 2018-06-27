export default (tasks, val) => {
  if (val.importance === 'all') {
    return tasks;
  }
  return tasks.filter(task => task.taskImportance === val.importance);
};
