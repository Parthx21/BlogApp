const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
const pass= await bcrypt.hash(password, salt);
console.log(pass)
};
hashPassword("p@rth2103#");