import React, {useContext} from 'react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    
    return (
            <Link to={`/detalle/${producto.id}`}>
                <div className="col-4 mt-4 mb-2">
                    <div className="card h-100 d-flex text-center p-2 border-dark">
                        <img src={producto.imgSrc} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{producto.modelo}</h5>
                            <p className="card-text">$ {producto.precio}</p>
                        </div>
                    </div>
                </div>
            </Link>
        
    )
}

export default Item