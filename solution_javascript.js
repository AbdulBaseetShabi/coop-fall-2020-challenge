class EventSourcer {
  constructor() {
    this.value = 0;
    this.changes = {};
    this.length = 0;
    this.current = 0;
  }

  add(num) {
    this.value += num;
    this.changes[this.length + ''] = {
      'event' : 'add',
      'value': num,
      'solution' : this.value,
      'change_id' : this.length
    };
    this.current = this.length;
    this.length += 1;
  }

  subtract(num) {
    this.value -= num;
    this.changes[this.length+''] = {
      'event' : 'sub',
      'value': num,
      'solution' : this.value,
      'change_id' : this.length
    };
    this.current = this.length;
    this.length += 1;
  }

  undo() {
    let local = this.current - 1;
    let change = this.changes[local + ''];
    this.value = change['solution']
    this.current = change['change_id']
  }
  redo() {
    let local = this.current + 1;
    let change = this.changes[local + ''];
    this.value = change['solution']
    this.current = change['change_id']
  }
  bulk_undo(num) {
    let local = this.current + num;
    let change = this.changes[local + ''];
    this.value = change['solution']
  }
  bulk_redo(num) {
    let local = this.current - num;
    let change = this.changes[local + ''];
    this.value = change['solution']
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
