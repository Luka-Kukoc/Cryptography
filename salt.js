//random value added to hash

const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

function signup(email, password) {
  const salt = randomBytes(16).toString("hex"); //random hex num
  const hashedPassword = scryptSync(password, salt, 64).toString("hex"); //hashed hex pas
  //sscrypt ued in crypto

  const user = { email, password: `${salt}:${hashedPassword}` }; //variable containing email and hashed pass
  return user;
}

function login(email, password) {
  const user = users.find((v) => v.email === email); //find by email

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  const match = timingSafeEqual(hashedBuffer, keyBuffer); //timingsavedequal used to prevent timeing attacks

  if (match) {
    return "login success";
  } else {
    return "login fail";
  }
}

let test = signup("luka", "123513");

console.log(test);
