import React from 'react'
import {Link} from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div>
            <h2>Welcome</h2>
            <Link to ="/main">Ir a Main</Link> 
        </div>
    )
}

export default WelcomePage
