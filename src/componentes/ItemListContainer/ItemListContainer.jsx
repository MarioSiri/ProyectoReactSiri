import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {

    const [arrayList, setArrayList] = useState([])

    useEffect(() => {

        fetch("autos.json")
        .then( ( res ) => res.json())
        .then( (data)  => setArrayList(data))
        .catch((err) => console.log(err))
        
    }, [])
    
    

    return (
        <div className='containerItem'>
            <h1>{props.greeting}</h1>
            <div className='containerCard'>
            <ItemList cars={arrayList} />
            </div>    
        </div>
    )
}

export default ItemListContainer