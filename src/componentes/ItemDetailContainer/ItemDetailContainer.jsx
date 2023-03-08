import React, { useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import  getCars  from '../../asyncMock'

const ItemDetailContainer = () => {

	const [info, setInfo] = useState({})
	const { detalleId } = useParams();

	useEffect(() => {
		getCars()
				.then((response) => setInfo(response.find(element => element.id === parseInt(detalleId))))
				.catch((error) => console.log(error))
    }, [])



	return (
		<>
			<ItemDetail info={info}/>
		</>
	);
};

export default ItemDetailContainer;




