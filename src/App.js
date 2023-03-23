import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './componentes/CartContainer/CartContainer';
import Contact from './componentes/Contact/Contact';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';

function App() {
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<Navbar />

					<Routes>
						<Route
							exact
							path="/"
							element={<ItemListContainer greeting="CATALOGO DE AUTOS" />}
						/>
						<Route
							exact
							path="/categoria/:categoriaIds"
							element={<ItemListContainer greeting="CATALOGO DE AUTOS" />}
						/>
						<Route exact path="/cart" element={<CartContainer />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route
							exact
							path="/detalle/:detalleId"
							element={<ItemDetailContainer />}
						/>
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</>
	);
}

export default App;
