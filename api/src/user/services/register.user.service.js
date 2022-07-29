module.exports = class RegisterUserService {
  constructor(userRepository, User, Password) {
    this.userRepository = userRepository;
    this.User = User;
    this.Password = Password;
  }

  async execute(user) {
    try {
      const userExists = await this.userRepository.findByEmail(user.email);
      if (userExists) {
        throw new Error("User already exists");
      }
      const encryptPassword = new this.Password(
        user.password
      ).encryptPassword();

      const _user = new this.User(
        user.name,
        user.email,
        encryptPassword,
        user.birthDate
      );

      const newUser = await this.userRepository.saveRecord(_user);

      return newUser;
    } catch (error) {
      throw Error(error.message);
    }
  }
};
