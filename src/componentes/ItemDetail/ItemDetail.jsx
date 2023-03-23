import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ info }) => {
	return (
		<div className="card">
			<div className="conteiner-img">
				<img
					src={process.env.PUBLIC_URL + '/' + info.img}
					alt={info.descripcion}
				/>
			</div>
			<p>{info.nombre}</p>
			<p>{info.modelo}</p>
			<p>{info.combustible}</p>
			<p>Año: {info.anio}</p>
			<p>Precio USD ${info.precio}</p>
			<ItemCount initial={1} stock={info.stock} info={info} />
			<Link to={'/'}>
				<button type="button" className="btn btn-secondary">
					VOLVER
				</button>
			</Link>
		</div>
	);
};

export default ItemDetail;
