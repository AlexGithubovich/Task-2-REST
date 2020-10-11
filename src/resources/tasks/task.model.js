const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'Task 1',
    order = null,
    description = 'Task 1',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
  // static toRequest(Task) {
  //   const { id, name, login, password } = Task;
  //   return { id, name, login, password };
  // }
}

module.exports = Task;
