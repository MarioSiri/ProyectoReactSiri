import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const item = ({ car }) => {
	return (
		<div className="card">
			<div className="conteiner-img">
				<img
					src={process.env.PUBLIC_URL + '/' + car.img}
					alt={car.descripcion}
				/>
			</div>
			<p>{car.nombre}</p>
			<p>{car.anio}</p>
			<Link to={`/detalle/${car.id}`}>
				<button type="button" className="btn btn-outline-primary">
					VER DETALLE
				</button>
			</Link>
		</div>
	);
};

export default item;
