import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light">
			<div className="container-fluid">
				<div>
					<p className='tituloNav'>FAKE STORE</p>
					
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page">
								HOME
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								
							>
								PRODUCTOS
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								
							>
								CONTACTO
							</a>
						</li>
					</ul>
				</div>
				<CartWidget />
			</div>
		</nav>
	);
};

export default Navbar;
