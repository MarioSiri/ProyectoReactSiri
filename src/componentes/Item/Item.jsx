import React from 'react'
import "./Item.css"

const item = ({car}) => {
    return (
        <div className="card">
				<div className="conteiner-img">
					<img src ={car.img} alt = {car.descripcion}/>
				</div>
				<p>
					{car.nombre}
				</p>
				<p>
					Precio USD ${car.precio}
				</p>
				<p>
					Año: ${car.anio}
				</p>
				<button>
                    AGREGAR AL CARRITO
				</button>
                <button>
                    VER DETALLE
				</button>
			</div>
    )
}

export default item