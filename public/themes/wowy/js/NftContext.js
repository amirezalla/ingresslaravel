const NFTMarketplaceABI = {
    "_format": "hh-sol-artifact-1",
    "contractName": "NFTMarketplace",
    "sourceName": "contracts/NFTMarketplace.sol",
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "sold",
                    "type": "bool"
                }
            ],
            "name": "MarketItemCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "createMarketSale",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "tokenURI",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "createToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fetchItemsListed",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct NFTMarketplace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fetchMarketItems",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct NFTMarketplace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fetchMyNFTs",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct NFTMarketplace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getListingPrice",
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
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "resellToken",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_listingPrice",
                    "type": "uint256"
                }
            ],
            "name": "updateListingPrice",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "bytecode": "0x6080604052655af3107a40006009553480156200001b57600080fd5b506040518060400160405280601681526020017f496e677265737364656669204e465420546f6b656e73000000000000000000008152506040518060400160405280600681526020017f4944464e4654000000000000000000000000000000000000000000000000000081525081600090816200009991906200036f565b508060019081620000ab91906200036f565b50505033600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000456565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200017757607f821691505b6020821081036200018d576200018c6200012f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001f77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001b8565b620002038683620001b8565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002506200024a62000244846200021b565b62000225565b6200021b565b9050919050565b6000819050919050565b6200026c836200022f565b620002846200027b8262000257565b848454620001c5565b825550505050565b600090565b6200029b6200028c565b620002a881848462000261565b505050565b5b81811015620002d057620002c460008262000291565b600181019050620002ae565b5050565b601f8211156200031f57620002e98162000193565b620002f484620001a8565b8101602085101562000304578190505b6200031c6200031385620001a8565b830182620002ad565b50505b505050565b600082821c905092915050565b6000620003446000198460080262000324565b1980831691505092915050565b60006200035f838362000331565b9150826002028217905092915050565b6200037a82620000f5565b67ffffffffffffffff81111562000396576200039562000100565b5b620003a282546200015e565b620003af828285620002d4565b600060209050601f831160018114620003e75760008415620003d2578287015190505b620003de858262000351565b8655506200044e565b601f198416620003f78662000193565b60005b828110156200042157848901518255600182019150602085019450602081019050620003fa565b868310156200044157848901516200043d601f89168262000331565b8355505b6001600288020188555050505b505050505050565b61446f80620004666000396000f3fe60806040526004361061012a5760003560e01c80636352211e116100ab578063ae677aa31161006f578063ae677aa3146103f9578063b88d4fde14610415578063be9af5361461043e578063c87b56dd1461045a578063e219fc7514610497578063e985e9c5146104b35761012a565b80636352211e146102fb57806370a082311461033857806372b3b6201461037557806395d89b41146103a5578063a22cb465146103d05761012a565b806312e85585116100f257806312e8558514610228578063202e37401461025357806323b872dd1461027e57806342842e0e146102a757806345f8fa80146102d05761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d45780630f08efe0146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612c2e565b6104f0565b6040516101639190612c76565b60405180910390f35b34801561017857600080fd5b506101816105d2565b60405161018e9190612d21565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190612d79565b610664565b6040516101cb9190612de7565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190612e2e565b6106aa565b005b34801561020957600080fd5b506102126107c1565b60405161021f9190612fc4565b60405180910390f35b34801561023457600080fd5b5061023d610a29565b60405161024a9190612ff5565b60405180910390f35b34801561025f57600080fd5b50610268610a33565b6040516102759190612fc4565b60405180910390f35b34801561028a57600080fd5b506102a560048036038101906102a09190613010565b610d1f565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190613010565b610d7f565b005b3480156102dc57600080fd5b506102e5610d9f565b6040516102f29190612fc4565b60405180910390f35b34801561030757600080fd5b50610322600480360381019061031d9190612d79565b61108b565b60405161032f9190612de7565b60405180910390f35b34801561034457600080fd5b5061035f600480360381019061035a9190613063565b611111565b60405161036c9190612ff5565b60405180910390f35b61038f600480360381019061038a91906131c5565b6111c8565b60405161039c9190612ff5565b60405180910390f35b3480156103b157600080fd5b506103ba61120a565b6040516103c79190612d21565b60405180910390f35b3480156103dc57600080fd5b506103f760048036038101906103f2919061324d565b61129c565b005b610413600480360381019061040e9190612d79565b6112b2565b005b34801561042157600080fd5b5061043c6004803603810190610437919061332e565b6113dc565b005b61045860048036038101906104539190612d79565b61143e565b005b34801561046657600080fd5b50610481600480360381019061047c9190612d79565b61171d565b60405161048e9190612d21565b60405180910390f35b6104b160048036038101906104ac91906133b1565b61182f565b005b3480156104bf57600080fd5b506104da60048036038101906104d591906133f1565b611a24565b6040516104e79190612c76565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105bb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105cb57506105ca82611ab8565b5b9050919050565b6060600080546105e190613460565b80601f016020809104026020016040519081016040528092919081815260200182805461060d90613460565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b600061066f82611b22565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106b58261108b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610725576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071c90613503565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610744611b6d565b73ffffffffffffffffffffffffffffffffffffffff16148061077357506107728161076d611b6d565b611a24565b5b6107b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a990613595565b60405180910390fd5b6107bc8383611b75565b505050565b606060006107cf6007611c2e565b905060006107dd6008611c2e565b6107e76007611c2e565b6107f191906135e4565b90506000808267ffffffffffffffff8111156108105761080f61309a565b5b60405190808252806020026020018201604052801561084957816020015b610836612b65565b81526020019060019003908161082e5790505b50905060005b84811015610a1e573073ffffffffffffffffffffffffffffffffffffffff16600b600060018461087f9190613618565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a0b5760006001826108db9190613618565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106109ee576109ed61364c565b5b6020026020010181905250600185610a069190613618565b945050505b8080610a169061367b565b91505061084f565b508094505050505090565b6000600954905090565b60606000610a416007611c2e565b905060008060005b83811015610ae9573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610a799190613618565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610ad657600183610ad39190613618565b92505b8080610ae19061367b565b915050610a49565b5060008267ffffffffffffffff811115610b0657610b0561309a565b5b604051908082528060200260200182016040528015610b3f57816020015b610b2c612b65565b815260200190600190039081610b245790505b50905060005b84811015610d14573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610b759190613618565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610d01576000600182610bd19190613618565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050848681518110610ce457610ce361364c565b5b6020026020010181905250600185610cfc9190613618565b945050505b8080610d0c9061367b565b915050610b45565b508094505050505090565b610d30610d2a611b6d565b82611c3c565b610d6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6690613735565b60405180910390fd5b610d7a838383611cd1565b505050565b610d9a838383604051806020016040528060008152506113dc565b505050565b60606000610dad6007611c2e565b905060008060005b83811015610e55573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610de59190613618565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610e4257600183610e3f9190613618565b92505b8080610e4d9061367b565b915050610db5565b5060008267ffffffffffffffff811115610e7257610e7161309a565b5b604051908082528060200260200182016040528015610eab57816020015b610e98612b65565b815260200190600190039081610e905790505b50905060005b84811015611080573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610ee19190613618565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361106d576000600182610f3d9190613618565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106110505761104f61364c565b5b60200260200101819052506001856110689190613618565b945050505b80806110789061367b565b915050610eb1565b508094505050505090565b60008061109783611fca565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611108576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ff906137a1565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611181576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117890613833565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006111d46007612007565b60006111e06007611c2e565b90506111ec338261201d565b6111f6818561223a565b61120081846122a7565b8091505092915050565b60606001805461121990613460565b80601f016020809104026020016040519081016040528092919081815260200182805461124590613460565b80156112925780601f1061126757610100808354040283529160200191611292565b820191906000526020600020905b81548152906001019060200180831161127557829003601f168201915b5050505050905090565b6112ae6112a7611b6d565b83836124aa565b5050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611342576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611339906138c5565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146113d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c990613957565b60405180910390fd5b8060098190555050565b6113ed6113e7611b6d565b83611c3c565b61142c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142390613735565b60405180910390fd5b61143884848484612616565b50505050565b6000600b600083815260200190815260200160002060030154905080341461149b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611492906139e9565b60405180910390fd5b33600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061157f6008612007565b61158a303384611cd1565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f193505050501580156115f4573d6000803e3d6000fd5b50600b600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6402540be400630495c0c53461165b9190613a09565b6116659190613a7a565b9081150290604051600060405180830381858888f19350505050158015611690573d6000803e3d6000fd5b50600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6402540be400630160203b346116e39190613a09565b6116ed9190613a7a565b9081150290604051600060405180830381858888f19350505050158015611718573d6000803e3d6000fd5b505050565b606061172882611b22565b600060066000848152602001908152602001600020805461174890613460565b80601f016020809104026020016040519081016040528092919081815260200182805461177490613460565b80156117c15780601f10611796576101008083540402835291602001916117c1565b820191906000526020600020905b8154815290600101906020018083116117a457829003601f168201915b5050505050905060006117d2612672565b905060008151036117e757819250505061182a565b60008251111561181c578082604051602001611804929190613ae7565b6040516020818303038152906040529250505061182a565b61182584612689565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146118d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ca90613b7d565b60405180910390fd5b6009543414611917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190e90613c0f565b60405180910390fd5b6000600b600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555080600b60008481526020019081526020016000206003018190555033600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611a1560086126f1565b611a20333084611cd1565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611b2b8161274d565b611b6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b61906137a1565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611be88361108b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b600080611c488361108b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611c8a5750611c898185611a24565b5b80611cc857508373ffffffffffffffffffffffffffffffffffffffff16611cb084610664565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611cf18261108b565b73ffffffffffffffffffffffffffffffffffffffff1614611d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3e90613ca1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611db6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dad90613d33565b60405180910390fd5b611dc3838383600161278e565b8273ffffffffffffffffffffffffffffffffffffffff16611de38261108b565b73ffffffffffffffffffffffffffffffffffffffff1614611e39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e3090613ca1565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611fc58383836001612794565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361208c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208390613d9f565b60405180910390fd5b6120958161274d565b156120d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cc90613e0b565b60405180910390fd5b6120e360008383600161278e565b6120ec8161274d565b1561212c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161212390613e0b565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612236600083836001612794565b5050565b6122438261274d565b612282576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161227990613e9d565b60405180910390fd5b806006600084815260200190815260200160002090816122a29190614069565b505050565b600081116122ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122e190614187565b60405180910390fd5b600954341461232e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161232590613c0f565b60405180910390fd5b6040518060a001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200182815260200160001515815250600b60008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050612467333084611cd1565b817fb640004f1d14576d0c209e240cad0410e0d8c0c33a09375861fbadae2588a98d333084600060405161249e94939291906141a7565b60405180910390a25050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161250f90614238565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516126099190612c76565b60405180910390a3505050565b612621848484611cd1565b61262d8484848461279a565b61266c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612663906142ca565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061269482611b22565b600061269e612672565b905060008151116126be57604051806020016040528060008152506126e9565b806126c884612921565b6040516020016126d9929190613ae7565b6040516020818303038152906040525b915050919050565b6000816000015490506000811161273d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161273490614336565b60405180910390fd5b6001810382600001819055505050565b60008073ffffffffffffffffffffffffffffffffffffffff1661276f83611fca565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006127bb8473ffffffffffffffffffffffffffffffffffffffff166129ef565b15612914578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026127e4611b6d565b8786866040518563ffffffff1660e01b815260040161280694939291906143ab565b6020604051808303816000875af192505050801561284257506040513d601f19601f8201168201806040525081019061283f919061440c565b60015b6128c4573d8060008114612872576040519150601f19603f3d011682016040523d82523d6000602084013e612877565b606091505b5060008151036128bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b3906142ca565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612919565b600190505b949350505050565b60606000600161293084612a12565b01905060008167ffffffffffffffff81111561294f5761294e61309a565b5b6040519080825280601f01601f1916602001820160405280156129815781602001600182028036833780820191505090505b509050600082602001820190505b6001156129e4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816129d8576129d7613a4b565b5b0494506000850361298f575b819350505050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612a70577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612a6657612a65613a4b565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612aad576d04ee2d6d415b85acef81000000008381612aa357612aa2613a4b565b5b0492506020810190505b662386f26fc100008310612adc57662386f26fc100008381612ad257612ad1613a4b565b5b0492506010810190505b6305f5e1008310612b05576305f5e1008381612afb57612afa613a4b565b5b0492506008810190505b6127108310612b2a576127108381612b2057612b1f613a4b565b5b0492506004810190505b60648310612b4d5760648381612b4357612b42613a4b565b5b0492506002810190505b600a8310612b5c576001810190505b80915050919050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612c0b81612bd6565b8114612c1657600080fd5b50565b600081359050612c2881612c02565b92915050565b600060208284031215612c4457612c43612bcc565b5b6000612c5284828501612c19565b91505092915050565b60008115159050919050565b612c7081612c5b565b82525050565b6000602082019050612c8b6000830184612c67565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612ccb578082015181840152602081019050612cb0565b60008484015250505050565b6000601f19601f8301169050919050565b6000612cf382612c91565b612cfd8185612c9c565b9350612d0d818560208601612cad565b612d1681612cd7565b840191505092915050565b60006020820190508181036000830152612d3b8184612ce8565b905092915050565b6000819050919050565b612d5681612d43565b8114612d6157600080fd5b50565b600081359050612d7381612d4d565b92915050565b600060208284031215612d8f57612d8e612bcc565b5b6000612d9d84828501612d64565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612dd182612da6565b9050919050565b612de181612dc6565b82525050565b6000602082019050612dfc6000830184612dd8565b92915050565b612e0b81612dc6565b8114612e1657600080fd5b50565b600081359050612e2881612e02565b92915050565b60008060408385031215612e4557612e44612bcc565b5b6000612e5385828601612e19565b9250506020612e6485828601612d64565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612ea381612d43565b82525050565b6000612eb482612da6565b9050919050565b612ec481612ea9565b82525050565b612ed381612c5b565b82525050565b60a082016000820151612eef6000850182612e9a565b506020820151612f026020850182612ebb565b506040820151612f156040850182612ebb565b506060820151612f286060850182612e9a565b506080820151612f3b6080850182612eca565b50505050565b6000612f4d8383612ed9565b60a08301905092915050565b6000602082019050919050565b6000612f7182612e6e565b612f7b8185612e79565b9350612f8683612e8a565b8060005b83811015612fb7578151612f9e8882612f41565b9750612fa983612f59565b925050600181019050612f8a565b5085935050505092915050565b60006020820190508181036000830152612fde8184612f66565b905092915050565b612fef81612d43565b82525050565b600060208201905061300a6000830184612fe6565b92915050565b60008060006060848603121561302957613028612bcc565b5b600061303786828701612e19565b935050602061304886828701612e19565b925050604061305986828701612d64565b9150509250925092565b60006020828403121561307957613078612bcc565b5b600061308784828501612e19565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6130d282612cd7565b810181811067ffffffffffffffff821117156130f1576130f061309a565b5b80604052505050565b6000613104612bc2565b905061311082826130c9565b919050565b600067ffffffffffffffff8211156131305761312f61309a565b5b61313982612cd7565b9050602081019050919050565b82818337600083830152505050565b600061316861316384613115565b6130fa565b90508281526020810184848401111561318457613183613095565b5b61318f848285613146565b509392505050565b600082601f8301126131ac576131ab613090565b5b81356131bc848260208601613155565b91505092915050565b600080604083850312156131dc576131db612bcc565b5b600083013567ffffffffffffffff8111156131fa576131f9612bd1565b5b61320685828601613197565b925050602061321785828601612d64565b9150509250929050565b61322a81612c5b565b811461323557600080fd5b50565b60008135905061324781613221565b92915050565b6000806040838503121561326457613263612bcc565b5b600061327285828601612e19565b925050602061328385828601613238565b9150509250929050565b600067ffffffffffffffff8211156132a8576132a761309a565b5b6132b182612cd7565b9050602081019050919050565b60006132d16132cc8461328d565b6130fa565b9050828152602081018484840111156132ed576132ec613095565b5b6132f8848285613146565b509392505050565b600082601f83011261331557613314613090565b5b81356133258482602086016132be565b91505092915050565b6000806000806080858703121561334857613347612bcc565b5b600061335687828801612e19565b945050602061336787828801612e19565b935050604061337887828801612d64565b925050606085013567ffffffffffffffff81111561339957613398612bd1565b5b6133a587828801613300565b91505092959194509250565b600080604083850312156133c8576133c7612bcc565b5b60006133d685828601612d64565b92505060206133e785828601612d64565b9150509250929050565b6000806040838503121561340857613407612bcc565b5b600061341685828601612e19565b925050602061342785828601612e19565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061347857607f821691505b60208210810361348b5761348a613431565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006134ed602183612c9c565b91506134f882613491565b604082019050919050565b6000602082019050818103600083015261351c816134e0565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061357f603d83612c9c565b915061358a82613523565b604082019050919050565b600060208201905081810360008301526135ae81613572565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006135ef82612d43565b91506135fa83612d43565b9250828203905081811115613612576136116135b5565b5b92915050565b600061362382612d43565b915061362e83612d43565b9250828201905080821115613646576136456135b5565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061368682612d43565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036136b8576136b76135b5565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061371f602d83612c9c565b915061372a826136c3565b604082019050919050565b6000602082019050818103600083015261374e81613712565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061378b601883612c9c565b915061379682613755565b602082019050919050565b600060208201905081810360008301526137ba8161377e565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061381d602983612c9c565b9150613828826137c1565b604082019050919050565b6000602082019050818103600083015261384c81613810565b9050919050565b7f6f6e6c79206f776e6572206f6620746865206d61726b6574706c61636520636160008201527f6e206368616e676520746865206c697374696e67207072696365000000000000602082015250565b60006138af603a83612c9c565b91506138ba82613853565b604082019050919050565b600060208201905081810360008301526138de816138a2565b9050919050565b7f4f6e6c79206d61726b6574706c616365206f776e65722063616e20757064617460008201527f65206c697374696e672070726963652e00000000000000000000000000000000602082015250565b6000613941603083612c9c565b915061394c826138e5565b604082019050919050565b6000602082019050818103600083015261397081613934565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b60006139d3604083612c9c565b91506139de82613977565b604082019050919050565b60006020820190508181036000830152613a02816139c6565b9050919050565b6000613a1482612d43565b9150613a1f83612d43565b9250828202613a2d81612d43565b91508282048414831517613a4457613a436135b5565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613a8582612d43565b9150613a9083612d43565b925082613aa057613a9f613a4b565b5b828204905092915050565b600081905092915050565b6000613ac182612c91565b613acb8185613aab565b9350613adb818560208601612cad565b80840191505092915050565b6000613af38285613ab6565b9150613aff8284613ab6565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b6000613b67602a83612c9c565b9150613b7282613b0b565b604082019050919050565b60006020820190508181036000830152613b9681613b5a565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b6000613bf9602483612c9c565b9150613c0482613b9d565b604082019050919050565b60006020820190508181036000830152613c2881613bec565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613c8b602583612c9c565b9150613c9682613c2f565b604082019050919050565b60006020820190508181036000830152613cba81613c7e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613d1d602483612c9c565b9150613d2882613cc1565b604082019050919050565b60006020820190508181036000830152613d4c81613d10565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613d89602083612c9c565b9150613d9482613d53565b602082019050919050565b60006020820190508181036000830152613db881613d7c565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613df5601c83612c9c565b9150613e0082613dbf565b602082019050919050565b60006020820190508181036000830152613e2481613de8565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613e87602e83612c9c565b9150613e9282613e2b565b604082019050919050565b60006020820190508181036000830152613eb681613e7a565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613f1f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613ee2565b613f298683613ee2565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613f66613f61613f5c84612d43565b613f41565b612d43565b9050919050565b6000819050919050565b613f8083613f4b565b613f94613f8c82613f6d565b848454613eef565b825550505050565b600090565b613fa9613f9c565b613fb4818484613f77565b505050565b5b81811015613fd857613fcd600082613fa1565b600181019050613fba565b5050565b601f82111561401d57613fee81613ebd565b613ff784613ed2565b81016020851015614006578190505b61401a61401285613ed2565b830182613fb9565b50505b505050565b600082821c905092915050565b600061404060001984600802614022565b1980831691505092915050565b6000614059838361402f565b9150826002028217905092915050565b61407282612c91565b67ffffffffffffffff81111561408b5761408a61309a565b5b6140958254613460565b6140a0828285613fdc565b600060209050601f8311600181146140d357600084156140c1578287015190505b6140cb858261404d565b865550614133565b601f1984166140e186613ebd565b60005b82811015614109578489015182556001820191506020850194506020810190506140e4565b868310156141265784890151614122601f89168261402f565b8355505b6001600288020188555050505b505050505050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000614171601c83612c9c565b915061417c8261413b565b602082019050919050565b600060208201905081810360008301526141a081614164565b9050919050565b60006080820190506141bc6000830187612dd8565b6141c96020830186612dd8565b6141d66040830185612fe6565b6141e36060830184612c67565b95945050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614222601983612c9c565b915061422d826141ec565b602082019050919050565b6000602082019050818103600083015261425181614215565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006142b4603283612c9c565b91506142bf82614258565b604082019050919050565b600060208201905081810360008301526142e3816142a7565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000614320601b83612c9c565b915061432b826142ea565b602082019050919050565b6000602082019050818103600083015261434f81614313565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061437d82614356565b6143878185614361565b9350614397818560208601612cad565b6143a081612cd7565b840191505092915050565b60006080820190506143c06000830187612dd8565b6143cd6020830186612dd8565b6143da6040830185612fe6565b81810360608301526143ec8184614372565b905095945050505050565b60008151905061440681612c02565b92915050565b60006020828403121561442257614421612bcc565b5b6000614430848285016143f7565b9150509291505056fea264697066735822122086d7fadc2cbec4e15b3dee8796b59b3fa33e86baaed8bf060b533dcdbfeb996f64736f6c63430008110033",
    "deployedBytecode": "0x60806040526004361061012a5760003560e01c80636352211e116100ab578063ae677aa31161006f578063ae677aa3146103f9578063b88d4fde14610415578063be9af5361461043e578063c87b56dd1461045a578063e219fc7514610497578063e985e9c5146104b35761012a565b80636352211e146102fb57806370a082311461033857806372b3b6201461037557806395d89b41146103a5578063a22cb465146103d05761012a565b806312e85585116100f257806312e8558514610228578063202e37401461025357806323b872dd1461027e57806342842e0e146102a757806345f8fa80146102d05761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d45780630f08efe0146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190612c2e565b6104f0565b6040516101639190612c76565b60405180910390f35b34801561017857600080fd5b506101816105d2565b60405161018e9190612d21565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190612d79565b610664565b6040516101cb9190612de7565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190612e2e565b6106aa565b005b34801561020957600080fd5b506102126107c1565b60405161021f9190612fc4565b60405180910390f35b34801561023457600080fd5b5061023d610a29565b60405161024a9190612ff5565b60405180910390f35b34801561025f57600080fd5b50610268610a33565b6040516102759190612fc4565b60405180910390f35b34801561028a57600080fd5b506102a560048036038101906102a09190613010565b610d1f565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190613010565b610d7f565b005b3480156102dc57600080fd5b506102e5610d9f565b6040516102f29190612fc4565b60405180910390f35b34801561030757600080fd5b50610322600480360381019061031d9190612d79565b61108b565b60405161032f9190612de7565b60405180910390f35b34801561034457600080fd5b5061035f600480360381019061035a9190613063565b611111565b60405161036c9190612ff5565b60405180910390f35b61038f600480360381019061038a91906131c5565b6111c8565b60405161039c9190612ff5565b60405180910390f35b3480156103b157600080fd5b506103ba61120a565b6040516103c79190612d21565b60405180910390f35b3480156103dc57600080fd5b506103f760048036038101906103f2919061324d565b61129c565b005b610413600480360381019061040e9190612d79565b6112b2565b005b34801561042157600080fd5b5061043c6004803603810190610437919061332e565b6113dc565b005b61045860048036038101906104539190612d79565b61143e565b005b34801561046657600080fd5b50610481600480360381019061047c9190612d79565b61171d565b60405161048e9190612d21565b60405180910390f35b6104b160048036038101906104ac91906133b1565b61182f565b005b3480156104bf57600080fd5b506104da60048036038101906104d591906133f1565b611a24565b6040516104e79190612c76565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105bb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105cb57506105ca82611ab8565b5b9050919050565b6060600080546105e190613460565b80601f016020809104026020016040519081016040528092919081815260200182805461060d90613460565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b600061066f82611b22565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106b58261108b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610725576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071c90613503565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610744611b6d565b73ffffffffffffffffffffffffffffffffffffffff16148061077357506107728161076d611b6d565b611a24565b5b6107b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a990613595565b60405180910390fd5b6107bc8383611b75565b505050565b606060006107cf6007611c2e565b905060006107dd6008611c2e565b6107e76007611c2e565b6107f191906135e4565b90506000808267ffffffffffffffff8111156108105761080f61309a565b5b60405190808252806020026020018201604052801561084957816020015b610836612b65565b81526020019060019003908161082e5790505b50905060005b84811015610a1e573073ffffffffffffffffffffffffffffffffffffffff16600b600060018461087f9190613618565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a0b5760006001826108db9190613618565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106109ee576109ed61364c565b5b6020026020010181905250600185610a069190613618565b945050505b8080610a169061367b565b91505061084f565b508094505050505090565b6000600954905090565b60606000610a416007611c2e565b905060008060005b83811015610ae9573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610a799190613618565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610ad657600183610ad39190613618565b92505b8080610ae19061367b565b915050610a49565b5060008267ffffffffffffffff811115610b0657610b0561309a565b5b604051908082528060200260200182016040528015610b3f57816020015b610b2c612b65565b815260200190600190039081610b245790505b50905060005b84811015610d14573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610b759190613618565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610d01576000600182610bd19190613618565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050848681518110610ce457610ce361364c565b5b6020026020010181905250600185610cfc9190613618565b945050505b8080610d0c9061367b565b915050610b45565b508094505050505090565b610d30610d2a611b6d565b82611c3c565b610d6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6690613735565b60405180910390fd5b610d7a838383611cd1565b505050565b610d9a838383604051806020016040528060008152506113dc565b505050565b60606000610dad6007611c2e565b905060008060005b83811015610e55573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610de59190613618565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610e4257600183610e3f9190613618565b92505b8080610e4d9061367b565b915050610db5565b5060008267ffffffffffffffff811115610e7257610e7161309a565b5b604051908082528060200260200182016040528015610eab57816020015b610e98612b65565b815260200190600190039081610e905790505b50905060005b84811015611080573373ffffffffffffffffffffffffffffffffffffffff16600b6000600184610ee19190613618565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361106d576000600182610f3d9190613618565b90506000600b60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508486815181106110505761104f61364c565b5b60200260200101819052506001856110689190613618565b945050505b80806110789061367b565b915050610eb1565b508094505050505090565b60008061109783611fca565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611108576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ff906137a1565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611181576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117890613833565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006111d46007612007565b60006111e06007611c2e565b90506111ec338261201d565b6111f6818561223a565b61120081846122a7565b8091505092915050565b60606001805461121990613460565b80601f016020809104026020016040519081016040528092919081815260200182805461124590613460565b80156112925780601f1061126757610100808354040283529160200191611292565b820191906000526020600020905b81548152906001019060200180831161127557829003601f168201915b5050505050905090565b6112ae6112a7611b6d565b83836124aa565b5050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611342576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611339906138c5565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146113d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c990613957565b60405180910390fd5b8060098190555050565b6113ed6113e7611b6d565b83611c3c565b61142c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142390613735565b60405180910390fd5b61143884848484612616565b50505050565b6000600b600083815260200190815260200160002060030154905080341461149b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611492906139e9565b60405180910390fd5b33600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061157f6008612007565b61158a303384611cd1565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6009549081150290604051600060405180830381858888f193505050501580156115f4573d6000803e3d6000fd5b50600b600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6402540be400630495c0c53461165b9190613a09565b6116659190613a7a565b9081150290604051600060405180830381858888f19350505050158015611690573d6000803e3d6000fd5b50600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6402540be400630160203b346116e39190613a09565b6116ed9190613a7a565b9081150290604051600060405180830381858888f19350505050158015611718573d6000803e3d6000fd5b505050565b606061172882611b22565b600060066000848152602001908152602001600020805461174890613460565b80601f016020809104026020016040519081016040528092919081815260200182805461177490613460565b80156117c15780601f10611796576101008083540402835291602001916117c1565b820191906000526020600020905b8154815290600101906020018083116117a457829003601f168201915b5050505050905060006117d2612672565b905060008151036117e757819250505061182a565b60008251111561181c578082604051602001611804929190613ae7565b6040516020818303038152906040529250505061182a565b61182584612689565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600b600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146118d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ca90613b7d565b60405180910390fd5b6009543414611917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190e90613c0f565b60405180910390fd5b6000600b600084815260200190815260200160002060040160006101000a81548160ff02191690831515021790555080600b60008481526020019081526020016000206003018190555033600b600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600b600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611a1560086126f1565b611a20333084611cd1565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611b2b8161274d565b611b6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b61906137a1565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611be88361108b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b600080611c488361108b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611c8a5750611c898185611a24565b5b80611cc857508373ffffffffffffffffffffffffffffffffffffffff16611cb084610664565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611cf18261108b565b73ffffffffffffffffffffffffffffffffffffffff1614611d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3e90613ca1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611db6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dad90613d33565b60405180910390fd5b611dc3838383600161278e565b8273ffffffffffffffffffffffffffffffffffffffff16611de38261108b565b73ffffffffffffffffffffffffffffffffffffffff1614611e39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e3090613ca1565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611fc58383836001612794565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361208c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208390613d9f565b60405180910390fd5b6120958161274d565b156120d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cc90613e0b565b60405180910390fd5b6120e360008383600161278e565b6120ec8161274d565b1561212c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161212390613e0b565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612236600083836001612794565b5050565b6122438261274d565b612282576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161227990613e9d565b60405180910390fd5b806006600084815260200190815260200160002090816122a29190614069565b505050565b600081116122ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122e190614187565b60405180910390fd5b600954341461232e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161232590613c0f565b60405180910390fd5b6040518060a001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200182815260200160001515815250600b60008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050612467333084611cd1565b817fb640004f1d14576d0c209e240cad0410e0d8c0c33a09375861fbadae2588a98d333084600060405161249e94939291906141a7565b60405180910390a25050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161250f90614238565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516126099190612c76565b60405180910390a3505050565b612621848484611cd1565b61262d8484848461279a565b61266c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612663906142ca565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061269482611b22565b600061269e612672565b905060008151116126be57604051806020016040528060008152506126e9565b806126c884612921565b6040516020016126d9929190613ae7565b6040516020818303038152906040525b915050919050565b6000816000015490506000811161273d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161273490614336565b60405180910390fd5b6001810382600001819055505050565b60008073ffffffffffffffffffffffffffffffffffffffff1661276f83611fca565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006127bb8473ffffffffffffffffffffffffffffffffffffffff166129ef565b15612914578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026127e4611b6d565b8786866040518563ffffffff1660e01b815260040161280694939291906143ab565b6020604051808303816000875af192505050801561284257506040513d601f19601f8201168201806040525081019061283f919061440c565b60015b6128c4573d8060008114612872576040519150601f19603f3d011682016040523d82523d6000602084013e612877565b606091505b5060008151036128bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b3906142ca565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612919565b600190505b949350505050565b60606000600161293084612a12565b01905060008167ffffffffffffffff81111561294f5761294e61309a565b5b6040519080825280601f01601f1916602001820160405280156129815781602001600182028036833780820191505090505b509050600082602001820190505b6001156129e4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816129d8576129d7613a4b565b5b0494506000850361298f575b819350505050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612a70577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612a6657612a65613a4b565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612aad576d04ee2d6d415b85acef81000000008381612aa357612aa2613a4b565b5b0492506020810190505b662386f26fc100008310612adc57662386f26fc100008381612ad257612ad1613a4b565b5b0492506010810190505b6305f5e1008310612b05576305f5e1008381612afb57612afa613a4b565b5b0492506008810190505b6127108310612b2a576127108381612b2057612b1f613a4b565b5b0492506004810190505b60648310612b4d5760648381612b4357612b42613a4b565b5b0492506002810190505b600a8310612b5c576001810190505b80915050919050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612c0b81612bd6565b8114612c1657600080fd5b50565b600081359050612c2881612c02565b92915050565b600060208284031215612c4457612c43612bcc565b5b6000612c5284828501612c19565b91505092915050565b60008115159050919050565b612c7081612c5b565b82525050565b6000602082019050612c8b6000830184612c67565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612ccb578082015181840152602081019050612cb0565b60008484015250505050565b6000601f19601f8301169050919050565b6000612cf382612c91565b612cfd8185612c9c565b9350612d0d818560208601612cad565b612d1681612cd7565b840191505092915050565b60006020820190508181036000830152612d3b8184612ce8565b905092915050565b6000819050919050565b612d5681612d43565b8114612d6157600080fd5b50565b600081359050612d7381612d4d565b92915050565b600060208284031215612d8f57612d8e612bcc565b5b6000612d9d84828501612d64565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612dd182612da6565b9050919050565b612de181612dc6565b82525050565b6000602082019050612dfc6000830184612dd8565b92915050565b612e0b81612dc6565b8114612e1657600080fd5b50565b600081359050612e2881612e02565b92915050565b60008060408385031215612e4557612e44612bcc565b5b6000612e5385828601612e19565b9250506020612e6485828601612d64565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612ea381612d43565b82525050565b6000612eb482612da6565b9050919050565b612ec481612ea9565b82525050565b612ed381612c5b565b82525050565b60a082016000820151612eef6000850182612e9a565b506020820151612f026020850182612ebb565b506040820151612f156040850182612ebb565b506060820151612f286060850182612e9a565b506080820151612f3b6080850182612eca565b50505050565b6000612f4d8383612ed9565b60a08301905092915050565b6000602082019050919050565b6000612f7182612e6e565b612f7b8185612e79565b9350612f8683612e8a565b8060005b83811015612fb7578151612f9e8882612f41565b9750612fa983612f59565b925050600181019050612f8a565b5085935050505092915050565b60006020820190508181036000830152612fde8184612f66565b905092915050565b612fef81612d43565b82525050565b600060208201905061300a6000830184612fe6565b92915050565b60008060006060848603121561302957613028612bcc565b5b600061303786828701612e19565b935050602061304886828701612e19565b925050604061305986828701612d64565b9150509250925092565b60006020828403121561307957613078612bcc565b5b600061308784828501612e19565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6130d282612cd7565b810181811067ffffffffffffffff821117156130f1576130f061309a565b5b80604052505050565b6000613104612bc2565b905061311082826130c9565b919050565b600067ffffffffffffffff8211156131305761312f61309a565b5b61313982612cd7565b9050602081019050919050565b82818337600083830152505050565b600061316861316384613115565b6130fa565b90508281526020810184848401111561318457613183613095565b5b61318f848285613146565b509392505050565b600082601f8301126131ac576131ab613090565b5b81356131bc848260208601613155565b91505092915050565b600080604083850312156131dc576131db612bcc565b5b600083013567ffffffffffffffff8111156131fa576131f9612bd1565b5b61320685828601613197565b925050602061321785828601612d64565b9150509250929050565b61322a81612c5b565b811461323557600080fd5b50565b60008135905061324781613221565b92915050565b6000806040838503121561326457613263612bcc565b5b600061327285828601612e19565b925050602061328385828601613238565b9150509250929050565b600067ffffffffffffffff8211156132a8576132a761309a565b5b6132b182612cd7565b9050602081019050919050565b60006132d16132cc8461328d565b6130fa565b9050828152602081018484840111156132ed576132ec613095565b5b6132f8848285613146565b509392505050565b600082601f83011261331557613314613090565b5b81356133258482602086016132be565b91505092915050565b6000806000806080858703121561334857613347612bcc565b5b600061335687828801612e19565b945050602061336787828801612e19565b935050604061337887828801612d64565b925050606085013567ffffffffffffffff81111561339957613398612bd1565b5b6133a587828801613300565b91505092959194509250565b600080604083850312156133c8576133c7612bcc565b5b60006133d685828601612d64565b92505060206133e785828601612d64565b9150509250929050565b6000806040838503121561340857613407612bcc565b5b600061341685828601612e19565b925050602061342785828601612e19565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061347857607f821691505b60208210810361348b5761348a613431565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006134ed602183612c9c565b91506134f882613491565b604082019050919050565b6000602082019050818103600083015261351c816134e0565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061357f603d83612c9c565b915061358a82613523565b604082019050919050565b600060208201905081810360008301526135ae81613572565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006135ef82612d43565b91506135fa83612d43565b9250828203905081811115613612576136116135b5565b5b92915050565b600061362382612d43565b915061362e83612d43565b9250828201905080821115613646576136456135b5565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061368682612d43565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036136b8576136b76135b5565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061371f602d83612c9c565b915061372a826136c3565b604082019050919050565b6000602082019050818103600083015261374e81613712565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061378b601883612c9c565b915061379682613755565b602082019050919050565b600060208201905081810360008301526137ba8161377e565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061381d602983612c9c565b9150613828826137c1565b604082019050919050565b6000602082019050818103600083015261384c81613810565b9050919050565b7f6f6e6c79206f776e6572206f6620746865206d61726b6574706c61636520636160008201527f6e206368616e676520746865206c697374696e67207072696365000000000000602082015250565b60006138af603a83612c9c565b91506138ba82613853565b604082019050919050565b600060208201905081810360008301526138de816138a2565b9050919050565b7f4f6e6c79206d61726b6574706c616365206f776e65722063616e20757064617460008201527f65206c697374696e672070726963652e00000000000000000000000000000000602082015250565b6000613941603083612c9c565b915061394c826138e5565b604082019050919050565b6000602082019050818103600083015261397081613934565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b60006139d3604083612c9c565b91506139de82613977565b604082019050919050565b60006020820190508181036000830152613a02816139c6565b9050919050565b6000613a1482612d43565b9150613a1f83612d43565b9250828202613a2d81612d43565b91508282048414831517613a4457613a436135b5565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613a8582612d43565b9150613a9083612d43565b925082613aa057613a9f613a4b565b5b828204905092915050565b600081905092915050565b6000613ac182612c91565b613acb8185613aab565b9350613adb818560208601612cad565b80840191505092915050565b6000613af38285613ab6565b9150613aff8284613ab6565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b6000613b67602a83612c9c565b9150613b7282613b0b565b604082019050919050565b60006020820190508181036000830152613b9681613b5a565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b6000613bf9602483612c9c565b9150613c0482613b9d565b604082019050919050565b60006020820190508181036000830152613c2881613bec565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613c8b602583612c9c565b9150613c9682613c2f565b604082019050919050565b60006020820190508181036000830152613cba81613c7e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613d1d602483612c9c565b9150613d2882613cc1565b604082019050919050565b60006020820190508181036000830152613d4c81613d10565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613d89602083612c9c565b9150613d9482613d53565b602082019050919050565b60006020820190508181036000830152613db881613d7c565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613df5601c83612c9c565b9150613e0082613dbf565b602082019050919050565b60006020820190508181036000830152613e2481613de8565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613e87602e83612c9c565b9150613e9282613e2b565b604082019050919050565b60006020820190508181036000830152613eb681613e7a565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613f1f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613ee2565b613f298683613ee2565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613f66613f61613f5c84612d43565b613f41565b612d43565b9050919050565b6000819050919050565b613f8083613f4b565b613f94613f8c82613f6d565b848454613eef565b825550505050565b600090565b613fa9613f9c565b613fb4818484613f77565b505050565b5b81811015613fd857613fcd600082613fa1565b600181019050613fba565b5050565b601f82111561401d57613fee81613ebd565b613ff784613ed2565b81016020851015614006578190505b61401a61401285613ed2565b830182613fb9565b50505b505050565b600082821c905092915050565b600061404060001984600802614022565b1980831691505092915050565b6000614059838361402f565b9150826002028217905092915050565b61407282612c91565b67ffffffffffffffff81111561408b5761408a61309a565b5b6140958254613460565b6140a0828285613fdc565b600060209050601f8311600181146140d357600084156140c1578287015190505b6140cb858261404d565b865550614133565b601f1984166140e186613ebd565b60005b82811015614109578489015182556001820191506020850194506020810190506140e4565b868310156141265784890151614122601f89168261402f565b8355505b6001600288020188555050505b505050505050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000614171601c83612c9c565b915061417c8261413b565b602082019050919050565b600060208201905081810360008301526141a081614164565b9050919050565b60006080820190506141bc6000830187612dd8565b6141c96020830186612dd8565b6141d66040830185612fe6565b6141e36060830184612c67565b95945050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614222601983612c9c565b915061422d826141ec565b602082019050919050565b6000602082019050818103600083015261425181614215565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006142b4603283612c9c565b91506142bf82614258565b604082019050919050565b600060208201905081810360008301526142e3816142a7565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000614320601b83612c9c565b915061432b826142ea565b602082019050919050565b6000602082019050818103600083015261434f81614313565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061437d82614356565b6143878185614361565b9350614397818560208601612cad565b6143a081612cd7565b840191505092915050565b60006080820190506143c06000830187612dd8565b6143cd6020830186612dd8565b6143da6040830185612fe6565b81810360608301526143ec8184614372565b905095945050505050565b60008151905061440681612c02565b92915050565b60006020828403121561442257614421612bcc565b5b6000614430848285016143f7565b9150509291505056fea264697066735822122086d7fadc2cbec4e15b3dee8796b59b3fa33e86baaed8bf060b533dcdbfeb996f64736f6c63430008110033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}




// Ensure this constant is available in the global scope
const BINANCE_SMART_CHAIN_CHAIN_ID = '0x38'; // Hexadecimal string for Chain ID 56

async function connectMetaMask() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            var account = accounts[0];
            await switchToBinanceSmartChain();
            const balanceWei = await ethereum.request({
                method: 'eth_getBalance',
                params: [account, 'latest']
            });
            const balanceBNB = ethers.utils.formatUnits(balanceWei, 'ether');
            const response = await axios.post('/login', { eth_address: account });
            console.log(response);
            // Refresh the page or redirect the user
            window.location.reload();
            //login auth with eth_address =  accounts[0]
            //axios for login
            //in the login update the users BNB balance
        } catch (error) {
            console.error("Error connecting to MetaMask", error);
        }
    } else {
        console.log("MetaMask is not installed");
    }
}

async function switchToBinanceSmartChain() {
    const currentChainId = await ethereum.request({ method: 'eth_chainId' });
    if (currentChainId !== BINANCE_SMART_CHAIN_CHAIN_ID) {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: BINANCE_SMART_CHAIN_CHAIN_ID }],
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                await addBinanceSmartChain();
            } else {
                console.error('Could not switch to Binance Smart Chain', switchError);
                throw switchError;
            }
        }
    }
}

async function addBinanceSmartChain() {
    try {
        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x38', // Binance Smart Chain ID in hexadecimal
                chainName: 'Binance Smart Chain Mainnet', // Must be a non-empty string
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB', // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ['https://bsc-dataseed.binance.org/'], // Must be a non-empty array
                blockExplorerUrls: ['https://bscscan.com'], // Must be a non-empty array (optional parameter)
                // ...other Binance Smart Chain parameters if necessary
            }],
        });
    } catch (addError) {
        console.error('Could not add Binance Smart Chain', addError);
        throw addError;
    }
}


const NFTMarketplaceAddress = 0xEE2a0724fB89d64768198000E0020c84132a0Ba3;

const fetchContract = async (signerOrProvider) =>
    new ethers.Contract(
        NFTMarketplaceAddress,
        NFTMarketplaceABI,
        signerOrProvider
    );



const fetchNFTs = async () => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(
            "https://young-green-shard.bsc.discover.quiknode.pro/41042211bc2caac86bde50238efb62c4e2c88269/"
        );


        const contract = fetchContract(provider);
        console.log(contract);
        const data = await contract.fetchMarketItems();

        for (const item of data) {
            const { tokenId } = item;
            console.log(`Fetched Token ID: ${tokenId}`);
        }
    } catch (error) {
        console.error("Error while fetching NFTs:", error);
    }
};

fetchNFTs();







// Adding event listener outside to avoid it being re-attached multiple times
document.querySelector('#connectButton').addEventListener('click', connectMetaMask);
