import React, { useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
	const [info, setInfo] = useState({});
	const { detalleId } = useParams();
	

	useEffect(() => {
		const db = getFirestore();

		const itemRef = doc(db, 'items', detalleId);

		getDoc(itemRef).then((snapshot) => {
			if (snapshot.exists()) {
				setInfo({ id: snapshot.id, ...snapshot.data() });
			}
		});
	}, [detalleId]);


	return (
		<>
			<div style={ {display: "flex", justifyContent: "center"}}>
				<ItemDetail info={info} />
			</div>
		</>
	);
};

export default ItemDetailContainer;
