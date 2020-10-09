const DB = {
  users: []
};

const getAll = name => {
  return DB[name].filter(db => db);
};

const getEntity = (id, name) => {
  const entities = DB[name];

  return entities.filter(entity => entity.id === id)[0];
};

const createEntity = (name, data) => {
  DB[name].push(data);
  return data;
};

const updateEntity = (name, newData, id) => {
  const oldEntity = getEntity(id, name);

  if (oldEntity) {
    const index = DB[name].indexOf(oldEntity);

    DB[name][index] = { ...newData };
  }
  return getEntity(id, name);
};

const deleteEntity = (name, id) => {
  const oldEntity = getEntity(id, name);

  if (oldEntity) {
    DB[name] = DB[name].filter(entity => entity.id !== id);
  }
  return oldEntity;
};
module.exports = {
  getAll,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity
};
