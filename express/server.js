const crypto = require("crypto");
const datetime = require("datetime");

class Blockchain {
  chain = [];

  constructor() {
    this.chain = [];
    this.createBlock(1, "0", "abc", "xyz");
  }

  createBlock(proof, previousHash, donorName, receiverName) {
    const block = {
      index: this.chain.length + 1,
      donor_name: donorName,
      receiver_name: receiverName,
      timestamp: Date.now(), // Use the built-in Date.now() function instead of str(datetime.datetime.now())
      proof,
      previous_hash: previousHash,
    };
    this.chain.push(block);
    return block;
  }

  printPreviousBlock() {
    return this.chain[this.chain.length - 1];
  }

  proofOfWork(previousProof) {
    let newProof = 1;
    let checkProof = false;

    while (!checkProof) {
      const hashOperation = crypto
        .createHash("sha256")
        .update(`${newProof ** 2 - previousProof ** 2}`)
        .digest("hex");
      if (hashOperation.substring(0, 5) === "00000") {
        checkProof = true;
      } else {
        newProof += 1;
      }
    }

    return newProof;
  }

  hash(block) {
    const stringifiedBlock = JSON.stringify(block, Object.keys(block).sort());
    return crypto.createHash("sha256").update(stringifiedBlock).digest("hex");
  }

  chainValid(chain) {
    let previousBlock = chain[0];
    let blockIndex = 1;

    while (blockIndex < chain.length) {
      let block = chain[blockIndex];
      if (block.previousHash !== this.hash(previousBlock)) {
        return false;
      }

      let previousProof = previousBlock.proof;
      let proof = block.proof;
      let hashOperation = sha256(
        String(proof ** 2 - previousProof ** 2).encode()
      ).hexDigest();

      if (hashOperation.slice(0, 5) !== "00000") {
        return false;
      }

      previousBlock = block;
      blockIndex += 1;
    }

    return true;
  }
}

const express = require("express");
const datetim = require("datetime");

const app = express();

// Create the object of the class blockchain
// const Blockchain = require("./blockchain");
const blockchain = new Blockchain();

// Mine a new block
app.get("/mine_block", (req, res) => {
  const previousBlock = blockchain.printPreviousBlock();
  const previousProof = previousBlock.proof;
  const proof = blockchain.proofOfWork(previousProof);
  const previousHash = blockchain.hash(previousBlock);
  const block = blockchain.createBlock(proof, previousHash);

  const response = {
    message: "A block is MINED",
    index: block.index,
    timestamp: block.timestamp,
    proof: block.proof,
    previousHash: block.previousHash,
  };

  res.send(response);
});

// Display blockchain in json format
app.get("/get_chain", (req, res) => {
  const response = {
    chain: blockchain.chain,
    length: blockchain.chain.length,
  };
  res.send(response);
});

// Check validity of blockchain
app.get("/valid", (req, res) => {
  const valid = blockchain.chainValid(blockchain.chain);

  if (valid) {
    const response = { message: "The Blockchain is valid." };
    res.send(response);
  } else {
    const response = { message: "The Blockchain is not valid." };
    res.send(response);
  }
});

// Run the server
app.listen(5000, () => console.log("Server listening on port 5000"));
