export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'name');
    this._length = this.validateNumber(length, 'length');
    this._students = this.validateStudentsArray(students, 'students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value, 'name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateNumber(value, 'length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.validateStudentsArray(value, 'students');
  }

  // Validation functions
  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new Error(`${attributeName} must be a string`);
    }
    return value;
  }

  validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new Error(`${attributeName} must be a number`);
    }
    return value;
  }

  validateStudentsArray(value, attributeName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new Error(`${attributeName} must be an array of strings`);
    }
    return value;
  }
}
