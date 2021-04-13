import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Funciones = ({onContentClick, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="C" clickHandler={onContentClick}/>
        <Button text="&larr;" clickHandler={onDelete}/>
    </section>
)

Funciones.protoTypes = {
    onContentClick : PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired
}

export default Funciones
