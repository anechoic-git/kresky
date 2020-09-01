import React, {Component} from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Link from "next/link";
import Layout from '../Components/Layout'

class HomePage extends Component {
	
	render() {
		return (
			<Layout>
				<MDBContainer className="mt-5 text-center">
					<MDBRow className="mx-lg-5">
						<MDBCol>
							<MDBJumbotron className='z-depth-0'>
								<h2 className="h1 display-3 font-weight-bold">Welcome to Kresky</h2>
								<p className="lead">The easiest way to Offer Wares, Contribute, Subscribe, and More on the Open Web.</p>
								
								<p>Using web3 technologies!</p>
								<p className="lead">
									{/* <MDBRow className="">
										<MDBCol>
											<a href="/" target="blank">
												<MDBIcon size="2x" icon="home" />
												<MDBBtn outline rounded>
													Login
												</MDBBtn>
											</a>
										</MDBCol>
										<MDBCol>
											<a href="/" target="blank">
												<MDBIcon size="2x" icon="wallet" />
												<MDBBtn outline rounded>
													SignUp
												</MDBBtn>
											</a>
										</MDBCol>
									</MDBRow> */}
								</p>
							</MDBJumbotron>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</Layout>
		);
	}
} 

export default HomePage;


