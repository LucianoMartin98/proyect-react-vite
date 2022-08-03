import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}</div>
                
            </div></div>

    )
}

export default ItemList