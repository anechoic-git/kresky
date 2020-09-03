import React, { Component } from 'react'
import Navigation from './Navigation';
import { Web3ReactProvider, createWeb3ReactRoot, useWeb3React } from '@web3-react/core';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from 'web3modal';
import Footer from './Footer';
import { MDBBtn } from 'mdbreact';
//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // Required
});

// const web3React = new Web3ReactProvider(provider);
// const user = await provider.enable();
// const web3 = new Web3(provider);

const getUser = async () => {
  let user = await provider.enable();
  return user
}

 const Layout = ({ children }, props) => {
  // console.log('Initializing example');
	// console.log('WalletConnectProvider is', WalletConnectProvider);
  //  Enable session (triggers QR Code modal)
	return (
		<div className="">
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        <Navigation toggleWalletConnect={getUser}/>
        {/* <MDBBtn className='mt-5' onClick={getUser}>
          wallet connect
        </MDBBtn> */}

        <main className="mt-md-5 pt-3 nav-clearnace">{children}</main>

        {/* <Footer /> */}
        {/* <Modal /> */}
      {/* </Web3ReactProvider> */}
		</div>
	);}

Layout.getInitialProps = async (context) => {
  // const web3React = new Web3ReactProvider(provider);
  // return {web3React}
}

export default Layout