const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'Board',
    columns = [
      {
        id: uuid(),
        title: 'Column 1',
        order: 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
  // static toRequest(board) {
  //   const { id, name, login, password } = board;
  //   return { id, name, login, password };
  // }
}

module.exports = Board;
