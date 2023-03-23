import React from 'react';
import { CartContext } from '../../Context/CartContext';
import { useContext, useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import "./CartContainer.css"
import swal from 'sweetalert';


const CartContainer = () => {
	const { cart, getTotal, getTotalQuantity, clearCart, removeFromCart } =
		useContext(CartContext);

	const [buyerNombre, setBuyerNombre] = useState('');
	const [buyerEmail, setBuyerEmail] = useState('');
	const [buyerTelefono, setBuyerTelefono] = useState('');

	const db = getFirestore();

	const ordersCollection = collection(db, 'orders');

	const handleSubmit = (e) => {
		e.preventDefault();

		const order = {
			buyer: {
				nombre: buyerNombre,
				email: buyerEmail,
				telefono: buyerTelefono,
			},
			items: cart,
			total: getTotal(),
		};

		addDoc(ordersCollection, order)
			.then((docRef) => {
				console.log('Documento enviado', docRef.id);
				swal('Compra finalizada con exito');
				resetForm();
			})
			.catch((e) => {
				console.log('Error al agregar', e);
			});
	};

	const resetForm = () => {
		setBuyerNombre('');
		setBuyerEmail('');
		setBuyerTelefono('');
		clearCart();
	};

	return (
		<>
			{!cart.length == 0 ? (
				<div className='carrito'>
					<h4>CARRITO</h4>
					<ul>
						{cart.map((item) => (
							<li key={item.id} className="listaCarrito">
								<span>
									{item.nombre} | <span>x{item.quantity}</span>{' '}
									<b>${item.precio * item.quantity}</b>
								</span>
								<div>
									<img src={item.img} alt={item.descripcion} />
								</div>
								<button
									type="button"
									className="btn btn-outline-danger"
									onClick={() => removeFromCart(item.id)}
								>
									BORRAR DEL CARRITO
								</button>
							</li>
						))}
					</ul>
					{cart.length > 0 && (
						<div>
							<ul>
								<span>
									<u>Productos totales:</u> {getTotalQuantity()}{' '}
								</span>
							</ul>
							<ul>
								<span>
									<u>Total a pagar:</u> ${getTotal()}{' '}
								</span>
								<button
									type="button"
									className="btn btn-dark btn-sm"
									onClick={() => clearCart()}
								>
									Vaciar
								</button>
							</ul>
						</div>
					)}
				</div>
			) : (
				<div className='carrito'>
					<h4>CARRITO VACIO</h4>
				</div>
			)}

			<div className='contenedorForm'>
				<h4>COMPLETE EL FORMULARIO PARA TERMINAR LA COMPRA</h4>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="nombre" className="form-label">
							Nombre:
						</label>
						<input
							type="text"
							className="form-control"
							value={buyerNombre}
							onChange={(e) => setBuyerNombre(e.target.value)}
							placeholder="Ingrese su nombre"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email:
						</label>
						<input
							type="text"
							className="form-control"
							value={buyerEmail}
							onChange={(e) => setBuyerEmail(e.target.value)}
							placeholder="Ingrese su correo electrónico"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="mensaje" className="form-label">
							Telefono:
						</label>
						<input
							type="text"
							className="form-control"
							value={buyerTelefono}
							onChange={(e) => setBuyerTelefono(e.target.value)}
							placeholder="Ingrese su telefono"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Terminar Compra
					</button>
				</form>
			</div>
		</>
	);
};

export default CartContainer;
