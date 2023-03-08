import React from 'react';


const ItemDetail = ({info}) => {
	return (
		<div className="card">
			<div className="conteiner-img">
				<img src={info.img} alt={info.descripcion} />
			</div>
			<p>{info.nombre}</p>
			<p>Precio USD ${info.precio}</p>
			<p>Año: ${info.anio}</p>
			<button>AGREGAR AL CARRITO</button>
		</div>
	);
};

export default ItemDetail;
