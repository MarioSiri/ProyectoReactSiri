import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemCount = ({ initial, stock, info }) => {
	const { addToCart } = useContext(CartContext);

	const [count, setCount] = useState(parseInt(initial));

	const restar = () => {
		setCount(count - 1);
	};

	const sumar = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div>
			<button
				type="button"
				className="btn btn-outline-primary"
				disabled={count <= 1}
				onClick={restar}
			>
				-
			</button>
			<span>{count}</span>
			<button
				type="button"
				className="btn btn-outline-primary"
				disabled={count >= stock}
				onClick={sumar}
			>
				+
			</button>
			<button
				ttype="button"
				className="btn btn-outline-primary"
				disabled={stock <= 0}
				onClick={() => addToCart(info, count)}
			>
				AGREGAR AL CARRITO
			</button>
		</div>
	);
};

export default ItemCount;
