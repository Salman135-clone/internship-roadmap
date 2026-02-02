const primsa = require("../prisma/client");

exports.findUserByEmail = async (email) => {
  return primsa.User.findUserByEmail({ where: { email } });
};

exports.signup = async (name, email) => {
  return primsa.User.create({
    data: {
      name,
      email,
    },
  });
};
