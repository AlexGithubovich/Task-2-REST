const Task = require('./task.model');

const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const getTask = (boardId, taskId) => tasksRepo.getTask(boardId, taskId);

const createTask = task => tasksRepo.createTask(new Task(task));

const updateTask = (boardId, taskId, task) =>
  tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { getAll, getTask, createTask, updateTask, deleteTask };
