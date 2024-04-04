import wallet from "./dev-wallet.json";

const bs58 = require("bs58");
//add wallet variable in the bracket
const privkey = new Uint8Array(); // content of id.json here
console.log(bs58.encode(privkey));
