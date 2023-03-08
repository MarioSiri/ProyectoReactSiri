import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import getCars from '../../asyncMock';

const ItemListContainer = (props) => {
	const [arrayList, setArrayList] = useState([]);
	const [loading, setLoading] = useState(false);

	const { categoriaId } = useParams();

	

	useEffect(() => {
		setLoading(true)
		if(categoriaId) {
			getCars()
				.then((response) => setArrayList(response.filter(element => element.categoria === categoriaId)))
				.catch((error) => console.log(error))
				.finally(() => setLoading(false))

		} else {
			getCars()
				.then((response) => setArrayList(response))
				.catch((error) => console.log(error))
				.finally(() => setLoading(false))
		}
		
		
	}, [categoriaId]);

    
	return (
		<div className="containerItem">
			<h1>{props.greeting}</h1>
			<div className="containerCard">
				{loading ? <h2>CARGANDO...</h2> : <ItemList cars={arrayList} />}
				
			</div>
		</div>
	);
};

export default ItemListContainer;
