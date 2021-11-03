const { createCipheriv, createDecipheriv, randomBytes } = require("crypto");

//symetric- sender and reciver have the same key

const message = "hellter skelter";

const key = randomBytes(32);
const iv = randomBytes(16); // initial vector - for preventing indentical sequence of text

const cipher = createCipheriv("aes256", key, iv); //encryption and hashing algos are different

//encrypt

const encryptedMsg =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

//decript
const decipher = createDecipheriv("aes256", key, iv);

const decryptMsg =
  decipher.update(encryptedMsg, "hex", "utf8") + decipher.final("utf8");

console.log(`decphered message: ${decryptMsg.toString("utf-8")}`);
