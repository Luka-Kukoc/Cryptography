//input => hashing funct => fixed length (scrambled output)
//same input => same output
//hashing algos: md5, sha256, argon2. md5 is shit, depricated by nist

const { createHash } = require("crypto")


function hash(input) {
    return createHash("sha256").update(input).digest("hex")
}

const password = "hello";
const password2 ="hell"
const hash2 = hash(password2)
const match = hash === hash2
console.log(match ? "good" : "bad")