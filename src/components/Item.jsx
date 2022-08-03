import React from 'react'

const Item = ({ producto }) => {
    return (

        <div className='d-flex'>
            <div className="card">
                <img src={producto.imgSrc} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.modelo}</h5>
                    <p className="card-text">{producto.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default Item