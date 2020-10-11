const DB = require('../../memoryDB');

const getAll = async boardId => {
  const tasksBD = await DB.getAll('tasks');

  return tasksBD.filter(task => task.boardId === boardId) || [];
};

const getTask = async (boardId, taskId) => {
  const tasks = await DB.getAll('tasks');

  const task = await tasks.find(taskLocal => taskLocal.id === taskId);
  if (!task) {
    process.stderr.write(`Cannot find task with id: ${taskId}; `);
  }
  return task;
};

const createTask = async task => {
  return await DB.createEntity('tasks', task);
};

const updateTask = async (boardId, taskId, task) => {
  const currTask = await getTask(boardId, taskId);

  if (!currTask) {
    process.stderr.write(`Cannot find task with id: ${taskId}; `);
  }

  const newTask = { ...currTask, ...task };

  const updatedTask = DB.updateEntity('tasks', newTask, taskId);
  return updatedTask;
};

const deleteTask = async (boardId, taskId) => {
  const task = await DB.deleteEntity('tasks', taskId);

  if (!task) {
    process.stderr.write(`Cannot find task with id: ${taskId}; `);
  }
  return task;
};

module.exports = { getAll, getTask, createTask, updateTask, deleteTask };
