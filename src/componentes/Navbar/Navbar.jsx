import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-sm navbar-light">
			<div class="container-fluid">
				<div>
					<p className='tituloNav'>FAKE STORE</p>
					
				</div>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page">
								HOME
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link active"
								aria-current="page"
								
							>
								PRODUCTOS
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link active"
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
