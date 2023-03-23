import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import {
	getDocs,
	collection,
	getFirestore,
	query,
	where,
	limit,
} from 'firebase/firestore';

const ItemListContainer = (props) => {
	const [arrayList, setArrayList] = useState([]);
	const [loading, setLoading] = useState(false);

	const { categoriaIds } = useParams();

	useEffect(() => {
		setLoading(true);
		if (categoriaIds) {
			const db = getFirestore();
			const q = query(
				collection(db, 'items'),
				where('categoriaId', '==', categoriaIds)
			);
			getDocs(q).then((snapshot) => {
				if (snapshot === 0) {
					console.log('No hay resultados en categorias');
				}
				setArrayList(
					snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);
				setLoading(false);
			});
		} else {
			const db = getFirestore();
			const carsRef = collection(db, 'items');

			getDocs(carsRef).then((snapshot) => {
				if (snapshot === 0) {
					console.log('No hay datos');
				}
				setArrayList(
					snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);
				setLoading(false);
			});
		}
	}, [categoriaIds]);

	return (
		<div className="containerItem">
			<h1>
				{categoriaIds === 'camioneta'
					? 'CATALOGO DE CAMIONETAS'
					: props.greeting}
			</h1>
			<div className="containerCard">
				{loading ? (
					<div className="text-center">
						<h3>CARGANDO...</h3>
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				) : (
					<ItemList cars={arrayList} />
				)}
			</div>
		</div>
	);
};

export default ItemListContainer;
