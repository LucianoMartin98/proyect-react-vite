import React from 'react'
import Producto from './Producto'

const ProductList = ({products}) => {
    return (
        <>     
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                {
                    products.map((producto)=>
                        <Producto key={producto.id} modelo={producto.modelo} precio={producto.precio} imgSrc={producto.imgSrc}/>
                    )
                }
                </div>
            </div>
        </div>
        </>

    )
}

export default ProductList