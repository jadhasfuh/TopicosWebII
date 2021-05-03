import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';

const Button = ({type, text, clickHandler}) => {
    return (
        <button className="button is-white" onClick = {() => {
            clickHandler(text)
        }}>
                {text}
        </button>
    )
}

Button.propTypes = {
    type : PropTypes.string, 
    text : PropTypes.string.isRequired,   
    clickHandler : PropTypes.func.isRequired
}

export default Button
