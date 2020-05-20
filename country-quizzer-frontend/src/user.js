class User {
  constructor(user) {
    this.id = user.id;
    this.username = user.username;
  }

  static findByUsername(name) {
    return this.call.find(user => user.username === name);
  }
}