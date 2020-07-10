class EventSourcer {
  constructor() {
    this.value = 0;
    this.changes = {};
    this.length = 0;
    this.current = 0;
  }

  add(num) {
    this.value += num;
    this.changes[Number.toString(this.length)] = {
      'event' : 'add',
      'value': num,
      'change_id' : this.length
    };
    this.current = this.length;
    this.length += 1;
  }

  subtract(num) {
    this.value -= num;
    this.changes[Number.toString(this.length)] = {
      'event' : 'sub',
      'value': num,
      'solution' : this.value,
      'change_id' : this.length
    };
    this.current = this.length;
    this.length += 1;

    console.log(this.changes);
  }

  undo() {
    let change = this.changes[Number.toString(this.current - 1)]
    this.value = this.changes['solution']
    this.current = this.changes['change_id']
  }
  redo() {
    let change = this.changes[Number.toString(this.current + 1)]
    this.value = this.changes['solution']
    this.current = this.changes['change_id']
  }
  bulk_undo(num) {
    let change = this.changes[Number.toString((this.current + num))]
    this.value = this.changes['solution']
  }
  bulk_redo(num) {
    let change = this.changes[Number.toString(this.length - num)]
    this.value = this.changes['solution']
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
