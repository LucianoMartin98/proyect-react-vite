import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categorias/nike">Nike</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categorias/adidas">Adidas</Link>
                            </li>
                            <CartWidget/>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar