const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

// Get All
router.route('/').get(async (req, res) => {
  const users = await usersService.getAll('users');
  // map user fields to exclude secret fields like "password"
  res.status(200).json(users.map(User.toResponse));
});

// Get User by Id
router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const user = await usersService.getUser(id);

  res.status(200).json(user);
});

// Create user
router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(User.toResponse(req.body));

  res.status(200).send(User.toResponse(user));
});

// Update user
router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const updatedUser = await usersService.updateUser(
    id,
    User.toResponse({ ...req.body, id })
  );
  res.status(200).send(updatedUser);
});

// Delete user
router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  const deletedUser = await usersService.deleteUser(id);
  res.status(204).send(deletedUser);
});
module.exports = router;
