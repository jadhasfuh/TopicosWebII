import React from 'react'
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Not found 404</h2>
            <Link to="/main">Regresar a Main</Link>
        </div>
    )
}

export default NotFound
