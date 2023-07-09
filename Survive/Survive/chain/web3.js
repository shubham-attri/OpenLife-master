const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/b017cbf22c3c47409fdf10520044e030');
//const provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545')
const web3 = new Web3(provider);

const abi1 = require("./build/contracts/Hackathon.json").abi;
const abi2 = require("./build/contracts/Hackathon_Two.json").abi;
const abi3 = require("./build/contracts/Hackathon_Three.json").abi;

const Hackathon = new web3.eth.Contract(abi1,0x2812431D7f74eA210A62E9E55082ac8A9a32854A);
const Hackathon_Two = new web3.eth.Contract(abi2,0x2812431D7f74eA210A62E9E55082ac8A9a32854A);
const Hackathon_Three = new web3.eth.Contract(abi3,0x2812431D7f74eA210A62E9E55082ac8A9a32854A);



