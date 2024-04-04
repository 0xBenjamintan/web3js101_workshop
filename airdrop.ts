import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

// We're going to import our keypair from the wallet file
// put wallet variable in the bracket
const keypair = Keypair.fromSecretKey(new Uint8Array());

//Create a Solana devnet connection to devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");
(async () => {
  try {
    // We're going to claim 2 devnet SOL tokens
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL
    );
    console.log(`Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
