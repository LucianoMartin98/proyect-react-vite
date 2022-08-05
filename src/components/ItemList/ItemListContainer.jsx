import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams();

    useEffect(() => {
        let productos = [
            {
                id: 1,
                modelo: "Stüssy x Dunk Low Pro SB 'Cherry'",
                idCategoria: "nike",
                precio: 53440,
                imgSrc: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/dedc3c491-5f028543d9576164a416551291514597-1024-1024.jpeg"
            },
            {
                id: 2,
                modelo: "Air Force 1 Shadow 'Washed Coral'",
                idCategoria: "nike",
                precio: 49999,
                imgSrc: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/13c1dfb51-2653f87fde6497be3716551291380800-1024-1024.jpeg"
            },
            {
                id: 3,
                modelo: "Ben & Jerry's x Dunk Low SB 'Chunky Dunky'",
                idCategoria: "nike",
                precio: 54999,
                imgSrc: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/820c66421-4b40e69992de63f03c16551291833375-1024-1024.jpeg"
            },
            {
                id: 4,
                modelo: "Forum Low Bad Bunny The First Cafe",
                idCategoria: "adidas",
                precio: 53999,
                imgSrc: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/0cca131e1-96739ba78245e994a716493743037564-640-01-42bc0b16fb46601dda16551272809812-1024-1024.jpg"
            },
            {
                id: 5,
                modelo: "Pharrell x NMD Hu Trail 'Happy' China Exclusive",
                idCategoria: "adidas",
                precio: 55475,
                imgSrc: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/03433e0c1-146cf1bd104dab277d16463380539874-1024-1024.jpeg"
            },
            {
                id: 6,
                modelo: "Pharrell x NMD Human Race 'Blue'",
                idCategoria: "adidas",
                precio: 55475,
                imgSrc: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/72b774fd1-52d534a85ded363d7016463380577864-1024-1024.jpeg"
            }
        ];

        const promesaProductos = new Promise((res, rej) => {
            setTimeout(() => {
                if (!idCategoria) {
                    res(productos);
                } else {
                    res(productos.filter((producto) => producto.idCategoria === idCategoria));
                }
            }, 2000);
        });

        promesaProductos.then((res) => {
            setProductos(res);
        });
    }, [idCategoria])

    return (
        <>
        
        <div className='container'>
        <ItemList productos={productos} />
        </div>
        </>
    )
}

export default ItemListContainer