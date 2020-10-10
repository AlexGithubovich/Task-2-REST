const DB = require('../../memoryDB');

const getAll = async name => {
  return await DB.getAll(name);
};

const getUser = async id => {
  const user = await DB.getEntity(id, 'users');
  if (!user) {
    throw new Error(`Cannot find user with id: ${id}`);
  }
  return user;
};

const createUser = async user => {
  return DB.createEntity('users', user);
};

const updateUser = async (id, user) => {
  const newUser = await DB.updateEntity('users', user, id);
  if (!newUser) {
    throw new Error(`Cannot find user with id: ${id}`);
  }
  return newUser;
  // return DB.updateEntity('users', user, id);
};

const deleteUser = async id => {
  const user = await DB.deleteEntity('users', id);
  if (!user) {
    throw new Error(`Cannot find user with id: ${id}`);
  }
  return user;
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
