const DB = {
  users: [],
  boards: [],
  tasks: []
};

const getAll = async name => {
  return DB[name].filter(db => db);
};

const getEntity = async (id, name) => {
  const entities = DB[name];
  const entity = entities.filter(entityLocal => entityLocal.id === id);
  // console.log('entity',entity)
  if (entity.length !== 0) {
    return entity;
  }

  return false;
};

const createEntity = async (name, data) => {
  DB[name].push(data);
  return data;
};

const updateEntity = async (name, newData, id) => {
  const oldEntity = await getEntity(id, name);
  // console.log('updateEntity',oldEntity[0])
  if (oldEntity) {
    const index = DB[name].indexOf(oldEntity[0]);

    DB[name][index] = { ...newData };
    return await getEntity(id, name);
  }
};

const deleteEntity = async (name, id) => {
  const entity = await getEntity(id, name);
  console.log('deleteEntity', entity);
  if (entity) {
    DB[name] = DB[name].filter(db => db).filter(item => item.id !== id);
    return entity;
  }
  return false;
};

const deleteTasks = async boardId => {
  const tasks = await getAll('tasks');
  const tasksForDeletion = tasks.filter(task => task.boardId === boardId);
  console.log('deleteTasks', tasksForDeletion);
  if (tasksForDeletion && tasksForDeletion.length !== 0) {
    DB.tasks = [...DB.tasks].filter(item => item.boardId !== boardId);
    return true;
  }
  return false;
};
// const unassignTasks = async userId => {
//   if (!DB.tasks) {
//     process.stderr.write(`Cannot unassign Tasks with id: ${userId}`);
//     return false;
//   }
//   const tasks = await getAll('tasks');
//   DB.tasks = [...tasks].forEach(task => {
//     if (task.userId === userId) task.userId = null;
//   });
//   return true;
// };

module.exports = {
  getAll,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
  deleteTasks
  // unassignTasks
};
