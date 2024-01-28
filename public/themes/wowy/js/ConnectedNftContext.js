
// Ensure this constant is available in the global scope
const BINANCE_SMART_CHAIN_CHAIN_ID = '0x38'; // Hexadecimal string for Chain ID 56

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




const fetchNFTs = async () => {
    try {
        const contract = await fetchContract();
        console.log(contract);
        console.log(await contract.resolvedAddress);
    } catch (error) {
        console.error("Error while fetching NFTs:", error);
    }
};

fetchNFTs();


const MintNft = async () => {
    try {
        var ipfsFormData = new FormData();
        ipfsFormData.append('name', document.getElementById('artWorkName').value);
        ipfsFormData.append('description', document.getElementById('description').value);
        ipfsFormData.append('image', document.getElementById('hiddenImageIpfs').value);
        ipfsFormData.append('artist', document.getElementById('creatorName').value);
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
            body: ipfsFormData
        })
            .then(response => response.json())
            .then(async ipfsResult => {
                if (ipfsResult && ipfsResult.Hash) {
                    Swal.update({
                        title: 'IPFS Upload Complete!',
                        html: 'Now uploading to server.',
                        allowOutsideClick: false,
                    });

                    var TokenURI = ipfsResult.Hash;
                    const contract = await fetchContract();
                    var userAddress = getUserAddress();
                    contract.methods.mintNFT(TokenURI, 0, 1).send({ from: userAddress })
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

                }
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    'There was a problem uploading your file to IPFS.' + error,
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






