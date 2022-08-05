import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';



const productoDetallado = {
    id: 1,
    modelo: "Stüssy x Dunk Low Pro SB 'Cherry'",
    idCategoria: "nike",
    precio: 53440,
    imgSrc: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/dedc3c491-5f028543d9576164a416551291514597-1024-1024.jpeg"
}

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(productoDetallado)
            }, 300);
        });

        getData.then(res => setData(res));
    },[])

    
    return (
        <div className="container d-flex justify-content-center align-items-center mt-4 mb-3">
            <ItemDetail data={data} />
        </div>
            
        
    )
}

export default ItemDetailContainer