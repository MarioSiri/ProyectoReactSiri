import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const item = ({car}) => {
    return (
        <div className="card">
				<div className="conteiner-img">
					<img src = {car.img} alt = {car.descripcion}/>
				</div>
				<p>
					{car.nombre}
				</p>
				<button>
                    AGREGAR AL CARRITO
				</button>
				<Link to={`detalle/${car.id}`}>
                <button>
                    VER DETALLE
				</button>
				</Link>

			</div>
    )
}

export default item