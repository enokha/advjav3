class Task {
  constructor(id, title, description, isComplete = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isComplete = isComplete;
  }
}

module.exports = Task;
