import React, { useEffect } from 'react'
import ProductList from './ProductList'
import Producto from './Producto'

const ProductListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setProducts([
            {
                id:1,
                modelo:"Ben & Jerry's x Dunk Low SB 'Chunky Dunky",
                marca:"Nike",
                precio:36000,
                imgSrc:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/820c66421-4b40e69992de63f03c16551291833375-1024-1024.jpeg"
            },
            {
                id:2,
                modelo:"Stüssy x Dunk Low Pro SB 'Cherry'",
                marca:"Nike",
                precio:36000,
                imgSrc:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/dedc3c491-5f028543d9576164a416551291514597-1024-1024.jpeg"
            },
            {
                id:3,
                modelo:"Ben & Jerry's x Dunk Low SB 'Chunky Dunky",
                marca:"Nike",
                precio:36000,
                imgSrc:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/820c66421-4b40e69992de63f03c16551291833375-1024-1024.jpeg"
            },
            {
                id:4,
                modelo:"Ben & Jerry's x Dunk Low SB 'Chunky Dunky",
                marca:"Nike",
                precio:36000,
                imgSrc:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/820c66421-4b40e69992de63f03c16551291833375-1024-1024.jpeg"
            },
            {
                id:5,
                modelo:"Ben & Jerry's x Dunk Low SB 'Chunky Dunky",
                marca:"Nike",
                precio:36000,
                imgSrc:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/820c66421-4b40e69992de63f03c16551291833375-1024-1024.jpeg"
            },
            {
                id:6,
                modelo:"Ben & Jerry's x Dunk Low SB 'Chunky Dunky",
                marca:"Nike",
                precio:36000,
                imgSrc:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/932/products/820c66421-4b40e69992de63f03c16551291833375-1024-1024.jpeg"
            },
        ])
    },[])


    return (
        <>
        <div className='bg-dark p-4'>
        <h2 className='text-white text-center'>Ultimos Productos</h2>
        <ProductList products={products}/>
        </div>
        </>
        
    )
}

export default ProductListContainer