import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <h2 className='titulo'>BLOGMINITECH</h2>
            <Link to="/">Home</Link>
            <Link to="/EncurtaUrl">Encurta.URL</Link>

            

        </div>
    )
}

export default Nav
