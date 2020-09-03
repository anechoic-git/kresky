import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className="">
			<Navigation />

			<main className="mt-md-5 pt-3 nav-clearnace">{children}</main>

			{/* <Footer /> */}
			{/* <Modal /> */}
		</div>
	);
}
