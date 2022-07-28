export class User {
  id;
  name;
  email;
  password;
  birthDate;

  constructor(id, name, email, password, birthDate) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
  }
}
