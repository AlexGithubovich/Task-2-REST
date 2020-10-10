const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

// Get All
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll('boards');
  // map board fields to exclude secret fields like "password"
  res.status(200).json(boards.map(Board.toResponse));
});

// Get board by Id
router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const board = await boardsService.getBoard(id);

  res.status(200).json(board);
});

// Create board
router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(Board.toResponse(req.body));

  res.status(200).send(Board.toResponse(board));
});

// Update board
router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const updatedBoard = await boardsService.updateBoard(
    id,
    Board.toResponse({ ...req.body, id })
  );
  res.status(200).send(updatedBoard);
});

// Delete board
router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  const deletedBoard = await boardsService.deleteBoard(id);
  res.status(204).send(deletedBoard);
});
module.exports = router;
