import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemDetail/ItemCount'
import { useCartContext } from '../../context/CartContext'


const ItemDetail = ({ data }) => {
    
    const [ goCart, setGoCart ] = useState(false)

    const {addProduct} = useCartContext ();
    
    const onAdd = (quantity) => {
        setGoCart(true);
        addProduct(data, quantity);
    }

    return (
        <>
                <div className="card cardDetalle ">
                    <img src={data.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.modelo}</h5>
                        <p className="card-text">${data.precio}</p>
                        {
                            goCart
                            ? <Link to='/carrito'><button className='btn btn-dark'>Finalizar la compra!</button></Link>
                            :<ItemCount initial={1} stock={10} onAdd={onAdd}/>
                        }
                    </div>
                </div>
        </>
    )
}

export default ItemDetail