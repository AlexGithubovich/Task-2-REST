const DB = {
  users: [],
  boards: [],
  tasks: []
};

const getAll = name => {
  return DB[name].filter(db => db);
};

const getEntity = (id, name) => {
  const entities = DB[name];
  const entity = entities.filter(entityLocal => entityLocal.id === id);
  // console.log('entity',entity)
  if (entity.length !== 0) {
    return entity;
  }
  return false;
};

const createEntity = (name, data) => {
  DB[name].push(data);
  return data;
};

const updateEntity = (name, newData, id) => {
  const oldEntity = getEntity(id, name)[0];

  if (oldEntity) {
    const index = DB[name].indexOf(oldEntity);

    DB[name][index] = { ...newData };
  }
  return getEntity(id, name);
};

const deleteEntity = (name, id) => {
  const entity = getEntity(id, name);
  // console.log('deleteEntity', entity)
  if (entity) {
    DB[name] = DB[name].filter(item => item.id !== id);
    return true;
  }
  return false;
};

const deleteTasks = boardId => {
  const tasks = getAll('tasks');
  const tasksForDeletion = tasks.filter(task => task.boardId === boardId);
  if (tasksForDeletion && tasksForDeletion.length !== 0) {
    DB.tasks = DB.tasks.filter(item => item.boardId !== boardId);
    return true;
  }
  return false;
};
const unassignTasks = userId => {
  if (!DB.tasks) {
    process.stderr.write(`Cannot unassign Tasks with id: ${userId}`);
    return false;
  }
  DB.tasks
    .filter(task => task)
    .forEach(task => {
      if (task.userId === userId) task.userId = null;
    });
  return true;
};

module.exports = {
  getAll,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
  deleteTasks,
  unassignTasks
};
