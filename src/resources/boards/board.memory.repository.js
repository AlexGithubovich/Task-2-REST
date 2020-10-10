const DB = require('../../memoryDB');

const getAll = async name => {
  return DB.getAll(name);
};

const getBoard = async id => {
  const board = await DB.getEntity(id, 'boards');
  if (!board) {
    throw new Error(`Cannot find board with id: ${id}`);
  }
  return board;
};

const createBoard = async board => {
  return await DB.createEntity('boards', board);
};

const updateBoard = async (id, board) => {
  const newBoard = await DB.updateEntity('boards', board, id);
  if (!newBoard) {
    throw new Error(`Cannot find board with id: ${id}`);
  }
  return newBoard;
};

const deleteBoard = async id => {
  const board = await DB.deleteEntity('boards', id);
  if (!board) {
    throw new Error(`Cannot find board with id: ${id}`);
  }
  return board;
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
