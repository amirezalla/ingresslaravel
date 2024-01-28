
// Ensure this constant is available in the global scope
// const BINANCE_SMART_CHAIN_CHAIN_ID = '0x38'; // Hexadecimal string for Chain ID 56
const BINANCE_SMART_CHAIN_TESTNET_CHAIN_ID = '0x61'; // Hexadecimal string for Chain ID 97 (Binance Smart Chain Testnet)

async function getUserAddress() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    var userAddress = accounts[0];
    return userAddress;
}

async function connectMetaMask() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            var account = accounts[0];
            // await switchToBinanceSmartChain();
            await switchToBinanceSmartChainTestnet();
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

// async function switchToBinanceSmartChain() {
//     const currentChainId = await ethereum.request({ method: 'eth_chainId' });
//     if (currentChainId !== BINANCE_SMART_CHAIN_TESTNET_CHAIN_ID) {
//         try {
//             await ethereum.request({
//                 method: 'wallet_switchEthereumChain',
//                 params: [{ chainId: BINANCE_SMART_CHAIN_TESTNET_CHAIN_ID }],
//             });
//         } catch (switchError) {
//             if (switchError.code === 4902) {
//                 await addBinanceSmartChain();
//             } else {
//                 console.error('Could not switch to Binance Smart Chain', switchError);
//                 throw switchError;
//             }
//         }
//     }
// }

async function switchToBinanceSmartChainTestnet() {
    const currentChainId = await ethereum.request({ method: 'eth_chainId' });
    if (currentChainId !== BINANCE_SMART_CHAIN_TESTNET_CHAIN_ID) {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: BINANCE_SMART_CHAIN_TESTNET_CHAIN_ID }],
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                await addBinanceSmartChainTestnet();
            } else {
                console.error('Could not switch to Binance Smart Chain Testnet', switchError);
                throw switchError;
            }
        }
    }
}

// async function addBinanceSmartChain() {
//     try {
//         await ethereum.request({
//             method: 'wallet_addEthereumChain',
//             params: [{
//                 chainId: '0x', // Binance Smart Chain ID in hexadecimal
//                 chainName: 'Binance Smart Chain Mainnet', // Must be a non-empty string
//                 nativeCurrency: {
//                     name: 'BNB',
//                     symbol: 'BNB', // 2-6 characters long
//                     decimals: 18,
//                 },
//                 rpcUrls: ['https://bsc-dataseed.binance.org/'], // Must be a non-empty array
//                 blockExplorerUrls: ['https://bscscan.com'], // Must be a non-empty array (optional parameter)
//                 // ...other Binance Smart Chain parameters if necessary
//             }],
//         });
//     } catch (addError) {
//         console.error('Could not add Binance Smart Chain', addError);
//         throw addError;
//     }
// }

async function addBinanceSmartChainTestnet() {
    try {
        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: BINANCE_SMART_CHAIN_TESTNET_CHAIN_ID, // Binance Smart Chain Testnet ID in hexadecimal
                chainName: 'Binance Smart Chain Testnet', // Must be a non-empty string
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB', // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'], // BSC Testnet RPC URL
                blockExplorerUrls: ['https://testnet.bscscan.com'], // BSC Testnet Block Explorer URL
                // ...other Binance Smart Chain Testnet parameters if necessary
            }],
        });
    } catch (addError) {
        console.error('Could not add Binance Smart Chain Testnet', addError);
        throw addError;
    }
}


const NFTMarketplaceAddress = "0xf517ca7E55c0983f4438790A4a68127C17B95f77";

const fetchContract = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://young-green-shard.bsc.discover.quiknode.pro/41042211bc2caac86bde50238efb62c4e2c88269/"
    );
    const abiResponse = await fetch('/themes/wowy/js/nft/NFTMarketplace.json');
    const NFTMarketplaceABI = await abiResponse.json();
    return new ethers.Contract(
        NFTMarketplaceAddress,
        NFTMarketplaceABI.abi,
        provider
    );
}

async function fetchContract1() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const abiResponse = await fetch('/themes/wowy/js/nft/NFTMarketplace.json');
    const NFTMarketplaceABI = await abiResponse.json();
    const contract = new ethers.Contract(NFTMarketplaceAddress, NFTMarketplaceABI.abi, signer);
    return contract;
}




const fetchNFTs = async () => {
    try {
        const contract = await fetchContract();
        console.log(contract);
        console.log(await contract.methods);
    } catch (error) {
        console.error("Error while fetching NFTs:", error);
    }
};

fetchNFTs();


const MintNft = async () => {
    try {
        const metadata = {
            name: document.getElementById('artWorkName').value,
            description: document.getElementById('description').value,
            image: document.getElementById('hiddenImageIpfs').value, // This should be a full IPFS path like "ipfs://<hash>"
            artist: document.getElementById('creatorName').value,
        };

        const metadataString = JSON.stringify(metadata);
        const metadataBlob = new Blob([metadataString], { type: 'application/json' });
        const formData = new FormData();
        formData.append('file', metadataBlob); // 'file' is the field that the IPFS expects

        // Show alert that we are uploading to IPFS
        Swal.fire({
            title: 'Generating Token URI',
            html: 'Please wait while we upload your data in IPFS',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            },
        });

        const projectId = '2LgfAX8FhCBfZ5UmJymQh5FTcq2'; // Replace with your Infura Project ID
        const projectSecret = '6b2582086ac5ea2d15891314e0462603'; // Replace with your Infura Project Secret
        const auth = btoa(`${projectId}:${projectSecret}`);

        // Upload to IPFS
        fetch('https://ingressdefi.infura-ipfs.io:5001/api/v0/add', {
            headers: {
                'Authorization': `Basic ${auth}`,
            },
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(async ipfsResult => {
                if (ipfsResult && ipfsResult.Hash) {
                    const TokenURI = "https://ingressdefi.infura-ipfs.io/ipfs/" + ipfsResult.Hash;
                    const contract = await fetchContract1();
                    const userAddress = await getUserAddress(); // Ensure this is awaited properly

                    try {
                        const mintTx = await contract.mintNFT(TokenURI, 0, 1).send({ from: userAddress });
                        // Listen for the confirmation or receipt
                        mintTx.on('confirmation', (confirmationNumber, receipt) => {
                            console.log('NFT minted:', receipt);
                        }).on('receipt', (receipt) => {
                            console.log('Receipt received:', receipt);
                            // If the Swal is showing, close it
                            Swal.close();
                            // Process receipt
                        });
                    } catch (error) {
                        // If the Swal is showing, update it with the error
                        Swal.fire(
                            'Error!',
                            'There was a problem minting your NFT: ' + error.message,
                            'error'
                        );
                    }
                }
            })
            .catch(error => {
                console.error('Error uploading to IPFS:', error);
                Swal.fire(
                    'Error!',
                    'There was a problem uploading your file to IPFS: ' + error.message,
                    'error'
                );
            });

    } catch (error) {
        console.error("Error while fetching NFTs:", error);
    }
};

const AdminApprove = async (nftId) => {
    try {
        const contract = await fetchContract();
        contract.methods.mintNFT(tokenURI, price, shares).send({ from: userAddress })
            .on('receipt', (receipt) => {
                // Find the NFTMinted event in the receipt
                const nftMintedEvent = receipt.events.NFTMinted;
                if (nftMintedEvent) {
                    const nftId = nftMintedEvent.returnValues.nftId;
                    console.log("NFT Minted with ID:", nftId);
                    // You can now use the NFT ID in your application
                }
            })
            .on('error', console.error);

        console.log(contract);
        console.log(await contract.resolvedAddress);
    } catch (error) {
        console.error("Error while fetching NFTs:", error);
    }
};

// document.querySelector('#connectButton').addEventListener('click', connectMetaMask);

document.querySelector('#btn_submit_mint').addEventListener('click', MintNft);

// document.querySelector('#admin_mint_approve').addEventListener('click', AdminApprove);






