class EventSourcer {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
  }
  subtract(num) {
    this.value -= num;
  }
  undo() {}
  redo() {}
  bulk_undo(num) {}
  bulk_redo(num) {}
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
