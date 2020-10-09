const User = require('./user.model');

const usersRepo = require('./user.memory.repository');

const getAll = name => usersRepo.getAll(name);

const getUser = id => usersRepo.getUser(id);

const createUser = user => usersRepo.createUser(new User(user));

const updateUser = (id, user) => usersRepo.updateUser(id, user);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
