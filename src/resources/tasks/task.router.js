const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

// Get All
router.route('/:boardId/tasks').get(async (req, res) => {
  const boardId = req.params.boardId;
  const tasks = await tasksService.getAll(boardId);

  // map task fields to exclude secret fields like "password"
  res.status(200).json(tasks.map(Task.toResponse));
});

// Get task by Id
router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;

  const task = await tasksService.getTask(boardId, taskId);
  if (!task) {
    res.status(404).send('Task does not exist');
  } else {
    res.status(200).json(task);
  }
});

// Create task
router.route('/:boardId/tasks').post(async (req, res) => {
  const boardId = req.params.boardId;
  const task = await tasksService.createTask({ ...req.body, boardId });

  res.status(200).send(Task.toResponse(task));
});

// Update task
router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;

  const updatedTask = await tasksService.updateTask(boardId, taskId, req.body);
  res.status(200).send(updatedTask);
});

// Delete task
router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;
  const deletedTask = await tasksService.deleteTask(boardId, taskId);

  if (deletedTask) {
    res.status(200).end();
  } else {
    res.status(404).send('Task not found');
  }
});
module.exports = router;
