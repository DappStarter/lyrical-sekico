require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth snow pulp harvest bread slot gentle'; 
let testAccounts = [
"0x3f1e205fad6307d212a3ead7feca3f6e3ad1ac80ed70c168f441b9c0a469701b",
"0x8c61bd208c9defe0256eb855b4c67566cb8e6c4b194db1c790c8875a1d6cd527",
"0x3c3da43279642cf87dc2d2d68858bc704d09c54675c7106727a1258989c75469",
"0x46d555be915f5b75ca4f9ee2e52362efbe778fa9b2812a85f01bfd459623da0d",
"0xe9b7606b2a8998d40e788472b1c3cfa6a3c26fb7b5a2e19ae975978aaf93eba5",
"0xdf9ec122aefc958150d836515131c4463c2be75a22d74491aba8f787125bda54",
"0x25accfdd96af6bcb912367d5e413bb9c60a409d6f7300085aa092ac82477ac2d",
"0x70809127b9d2c9afb25da776d4a55dfbf45d32204dac26311d5bf3ec8ab2053b",
"0x41c4c97ca72334fff293b9c98198d08fec22c6065b803edec419aafda6809ee0",
"0xadac95e21d011399d998a73842d25b0484ee330d1626bddc0a5cbf8542ca51f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
