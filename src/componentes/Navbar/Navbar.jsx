import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light">
			<div className="container-fluid">
				<div>
					<Link to="/" className='tituloNav'>FAKE STORE</Link>
					
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
							<Link to="/" className="nav-link active" aria-current="page">
								HOME
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/categoria/auto"
								className="nav-link active"
								aria-current="page"
								
							>
								AUTOS
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/categoria/camioneta"
								className="nav-link active"
								aria-current="page"
								
							>
								CAMIONETAS
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact"
								className="nav-link active"
								aria-current="page"
								
							>
								CONTACTO
							</Link>
						</li>
					</ul>
				</div>
				<CartWidget />
			</div>
		</nav>
	);
};

export default Navbar;
