// import wallet from "./dev-wallet.json";

// const bs58 = require("bs58");
// //add wallet variable in the bracket
// const privkey = new Uint8Array(wallet); // content of id.json here
// console.log(bs58.encode(privkey));


import bs58 from 'bs58';

// Example Base58 string (the encoded private key)
const base58String = "";

// Decode Base58 string back into Uint8Array
const decodedPrivKey = bs58.decode(base58String);

console.log("Decoded Private Key (Uint8Array):", decodedPrivKey);

// Now, decodedPrivKey is the original Uint8Array, which you can use as a private key
