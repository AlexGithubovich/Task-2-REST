const DB = require('../../memoryDB');

const getAll = async name => {
  return await DB.getAll(name);
};

const getUser = async id => {
  const user = await DB.getEntity(id, 'users');
  if (!user) {
    process.stderr.write(`Cannot find user with id: ${id}; \n`);
  }
  return user;
};

const createUser = async user => {
  const newUser = await DB.createEntity('users', user);

  return newUser;
};

const updateUser = async (id, user) => {
  const newUser = await DB.updateEntity('users', user, id);
  if (!newUser) {
    process.stderr.write(`Cannot find user with id: ${id}; \n`);
  }
  return newUser;
};

const deleteUser = async id => {
  const user = await DB.deleteEntity('users', id);
  if (user) {
    await DB.unassignTasks(id);
    return user;
  }
  process.stderr.write(`Cannot find user with id: ${id}; \n`);
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
