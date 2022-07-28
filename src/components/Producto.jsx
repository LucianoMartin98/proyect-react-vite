import React from 'react'

const Producto = (imgSrc,modelo,precio) => {
    return (
        <>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='card border border-3 border-primary mt-3 text-center'>
                <img src={imgSrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"> {modelo}</h5>
                        <p className="card-text">${precio}</p>
                        <a href="#" className="btn btn-primary">Añadir al carrito</a>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Producto