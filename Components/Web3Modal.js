import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const providerOptions = {
	/* See Provider Options Section */
	walletconnect: {
		package: WalletConnectProvider, // required
		options: {
			infuraId: '4dd93c13d6d64399a539ca24944c28f2', // required
		},
	},
};

const web3Modal = new Web3Modal({
	network: 'rinkeby', // optional
	cacheProvider: true, // optional
	providerOptions, // required
});

const provider = await web3Modal.connect();

const web3 = new Web3(provider);
