(async () => {
    // test by contracts/_Storage.sol
    const address = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";
    const abiArray = [
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

    const contractInstance = new web3.eth.Contract(abiArray, address);
    console.log(await contractInstance.methods.retrieve().call());

    let account = await web3.eth.getAccounts();
    let tx = await contractInstance.methods.store(999).send({from: account[0]})

    console.log(await contractInstance.methods.retrieve().call());
    console.log(tx);

}) ()