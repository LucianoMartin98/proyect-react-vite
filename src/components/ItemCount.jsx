import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [clickCount, setClickCount] = useState(1);

    const aumentarContador = () => {
        setClickCount(clickCount + 1);
    }
    const restarContador = () => {
        setClickCount(clickCount - 1);
    }



    return (
        <>
            <div className='container'>
                <div className='card cardItemCount  mt-3 gap-2 p-2'>
                    <div className='d-flex justify-content-between border border-dark bg-light p-2'>
                        <button className='btn btn-primary' onClick={restarContador}>-</button>
                        {clickCount}
                        <button className='btn btn-primary' onClick={aumentarContador}>+</button>
                    </div>
                    <button className='btn btn-primary'>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount