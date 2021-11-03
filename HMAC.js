//hash based message auth coded
//hash requiring a password/key (json auth on the web)

const { createHmac } = require("crypto")

const key = "lock"
const msg = "fu"

const hmac = createHmac("sha256", key).update(msg).digest("hex")

const key2 = "lock2"

const hmac2 = createHmac("sha256", key).update(msg).digest("hex")

//get the same hash when same pass is used

console.log(hmac)
console.log(hmac2)