import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar />

    <Routes>
        <Route exact path='/' element={<ItemListContainer greeting="CATALOGO DE AUTOS" />} />
        
      
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
