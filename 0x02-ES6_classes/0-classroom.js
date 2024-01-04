export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  // Getter for maxStudentsSize
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  // Setter for maxStudentsSize
  set maxStudentsSize(value) {
    this._maxStudentsSize = value;
  }
  // Other methods or properties can be added as needed
}
