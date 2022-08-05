import React from 'react'
import ItemCount from '../ItemDetail/ItemCount'

const Item = ({ producto }) => {
    return (
        <div className="col-4 mt-4 mb-2">
            <div className="card h-100 d-flex text-center p-2 border-dark">
                <img src={producto.imgSrc} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.modelo}</h5>
                    <p className="card-text">$ {producto.precio}</p>
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}

export default Item