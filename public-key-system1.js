//solves the problem of people having to use the same key
//uses public and private key which are mathematicaly linked(mailbox)

const { generateKeyPair, generateKeyPairSync } = require("crypto");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, //length of key bits
  publicKeyEncoding: {
    type: "spki",
    format: "pem", //privacy enhanced mail
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
    /* cypher: "aes-256-cbc",
        passphrase: "secret" */
  },
});

console.log(privateKey);
console.log(publicKey);

module.exports = {
  publicKey,
  privateKey,
};
