const UserService = require("./user.service");
const UserRepository = require("../dbContent/users/db.repository");
const repository = new UserRepository();

const service = new UserService(repository);

describe("UserService", () => {
  test("Should return a valid user and 'User found' as message", async () => {
    const user = await service.getUser(1);
    expect(user).toMatchObject({
      id: 1,
      name: "Felipe",
      birthDate: "1992/07/22",
    });
    expect(user.message).toBe("User found");
  });

  test("Should return 'User not found' if there is no user with this id", async () => {
    const user = await service.getUser(10);
    expect(user.message).toBe("User not found");
  });
});
