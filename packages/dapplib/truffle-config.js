require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note spice pulp hunt drink equal genuine'; 
let testAccounts = [
"0xdbd216ea9f6ffa4e8e5609dcee5b2092b8604c6c34cd8bbeb95233c381d9edd8",
"0xc7faf28d386c9d8a28f3f453fca0d5670cea3d9eb5f67e6acc510450c5036f83",
"0x32234bad251d58ee29ea5ca3b7c376b252b021afd3a0aa68b5cf28d305143b6b",
"0x83a6c67a09dca4ae9ed0c6f73a66c8e9715a9ac94911d4dedf8d0692f1ce722c",
"0xa7ee1098a24d2d05cb527860a8ed922f7cf0a3d576bfb8d16d3dc114d3f77ac0",
"0xe61d134bd44cd874cd3923213eb5d22f050f4e739eb79cff90acfe1ed0230968",
"0xb0ca6b67c7935ff6dfab0882aabdb884c8d3d897364bff25d761d952d4caab24",
"0x611338bbc3cbf5146c2bbfd2031e25b4799edcf0f91891d912eda863141499cd",
"0x7683a0e27ee9db3fccdafa067e9b59f58f41a6a42f2dcfca4f60b6518c28c1d7",
"0xf49d36305ddb2379326918ab74031cb883b035b2af4b4ab1cc8eacba98ca4fd1"
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
            version: '^0.8.0'
        }
    }
};

