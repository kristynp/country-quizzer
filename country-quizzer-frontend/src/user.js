class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
  }

  static findByUsername(name) {
    return this.call.find(user => user.username === name);
  }
}