const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./public-key-system1");

const message = "this need to be verified";
//sign
const signer = createSign("rsa-sha256");

signer.update(message);

const signature = signer.sign(privateKey, "hex");

//verify

const verifier = createVerify("rsa-sha256");
verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(isVerified);
