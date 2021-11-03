const { publicEncrypt, privateDecrypt } = require("crypto");

const { publicKey, privateKey } = require("./public-key-system1");

const messsage = "message text";

const encryptedData = publicEncrypt(publicKey, Buffer.from(messsage));
const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(encryptedData.toString("hex"));
console.log(decryptedData.toString("utf-8"));
