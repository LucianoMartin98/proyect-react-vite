import React from 'react'
import { useState, useEffect } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const aumentarContador = () => {
        setCount(count + 1);
    }
    const restarContador = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])


    return (
        <div className="card px-5 pb-3">
            <div className='card-body d-flex justify-content-around align-items-center p-2'>
                <button className='btn btn-primary' disabled={count <= 1}  onClick={restarContador}>-</button>
                {count}
                <button className='btn btn-primary' disabled={count >= stock} onClick={aumentarContador}>+</button>
            </div>
            <button disabled={stock <= 0} onClick={()=> onAdd(count)} className='btn btn-primary'>Agregar al Carrito</button>
        </div>

    )
}

export default ItemCount