const bcrypt = require("bcrypt");
export class Password {
  password;
  constructor(password) {
    this.id = id;
    this.password = password;
  }
  encryptPassword() {
    return bcrypt.hashSync(this.password, 10);
  }
}
