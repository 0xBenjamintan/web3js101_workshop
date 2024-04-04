# Follow these steps in the workshop

1. Initialize codespace and install dependencies. Run the following command:
```
yarn install
```
2. Generate new wallet keypair by running:
```
yarn keygen
```
3. Copy the Uint8Array into the dev-wallet.json file
4. Receive Solana airdrop.
   - First, go into the airdrop.ts file and type the variable "wallet" into line 6 as follows:
     
     > (const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));)
   - Next, run the following command:
    ```
     yarn airdrop
     ```

5. Import generated wallet into Phantom Wallet
   - First, go into the decode.ts file and type the variable "wallet" into line 5 as follows:
     
     > const privkey = new Uint8Array(wallet); 
   - Second, decode the Uint8Array into base58 encoded private key by running the following command:
    ```
     yarn decode
     ```
    - Open Phantom Wallet in your browser, and import the private key. Verify both public keys are the same.

6. Transfer all airdropped Sols to destination wallet
   - First, go into the transfer.ts file and type the variable "wallet" into line 14 as follows:
     
     > (const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));)
   - Next, run the following command:
    ```
     yarn transfer
     ```

7. Verify if Sols are transferred into main account. 

## You're all set to develop on Solana!
