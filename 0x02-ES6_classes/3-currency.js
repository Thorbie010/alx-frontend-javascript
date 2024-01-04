export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, 'code');
    this._name = this.validateString(name, 'name');
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this.validateString(value, 'code');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value, 'name');
  }

  // Method to display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation function for strings
  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new Error(`${attributeName} must be a string`);
    }
    return value;
  }
}
