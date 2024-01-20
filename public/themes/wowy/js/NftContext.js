
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


const NFTMarketplaceAddress = "0x8267fa4A9f305D073a11ECD34AFD73e6a27Fd04D";

const fetchContract = async (signerOrProvider) => {
    const abiResponse = await fetch('/themes/wowy/js/nft/NFTMarketplace.json');
    const NFTMarketplaceABI = await abiResponse.json();
    return new ethers.Contract(
        NFTMarketplaceAddress,
        NFTMarketplaceABI.abi,
        signerOrProvider
    );
}




const fetchNFTs = async () => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(
            "https://young-green-shard.bsc.discover.quiknode.pro/41042211bc2caac86bde50238efb62c4e2c88269/"
        );

        const contract = await fetchContract(provider);
        console.log(contract);
        console.log(await contract.resolvedAddress);

        //     const data = await contract.fetchMarketItems();
        //     console.log(data);

        //     for (const item of data) {
        //         const { tokenId } = item;
        //         console.log(`Fetched Token ID: ${tokenId}`);
        //     }
    } catch (error) {
        console.error("Error while fetching NFTs:", error);
    }
};

fetchNFTs();

document.querySelector('#connectButton').addEventListener('click', connectMetaMask);




