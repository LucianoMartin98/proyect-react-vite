import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [clickCount, setClickCount] = useState(0);

    const aumentarContador = () => {
        setClickCount(clickCount + 1);
    }
    const restarContador = () => {
        setClickCount(clickCount - 1);
    }



    return (
        <div className="card px-5 pb-3">
            <div className='card-body d-flex justify-content-around align-items-center p-2'>
                <button className='btn btn-primary' onClick={restarContador}>-</button>
                {clickCount}
                <button className='btn btn-primary' onClick={aumentarContador}>+</button>
            </div>
            <button className='btn btn-primary'>Agregar al Carrito</button>
        </div>

    )
}

export default ItemCount