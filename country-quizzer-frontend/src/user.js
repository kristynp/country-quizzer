class User {
  constructor(user) {
    this.id = user.id;
    this.username = user.username;
    User.all.push(this);
  }

  static findByUsername(name) {
    //console.log(User.all)
    return this.all.find(user => user.username === name);
  }
}

User.all = [];