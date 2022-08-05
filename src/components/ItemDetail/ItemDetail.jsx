import React from 'react'

const ItemDetail = ({ data }) => {
    return (
        <>
                <div className="card cardDetalle ">
                    <img src={data.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.modelo}</h5>
                        <p className="card-text">${data.precio}</p>
                        <p className="card-text">Zapatilla nike importada desde Estados Unidos</p>
                        <a href="#" className="btn btn-primary">Añadir al carrito</a>
                    </div>
                </div>
        </>
    )
}

export default ItemDetail