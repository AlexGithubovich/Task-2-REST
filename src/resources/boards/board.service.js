const Board = require('./board.model');

const boardsRepo = require('./board.memory.repository');

const getAll = name => boardsRepo.getAll(name);

const getBoard = id => boardsRepo.getBoard(id);

const createBoard = board => boardsRepo.createBoard(new Board(board));

const updateBoard = (id, board) => boardsRepo.updateBoard(id, board);

const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
