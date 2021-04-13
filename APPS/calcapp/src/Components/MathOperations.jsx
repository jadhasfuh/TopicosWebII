import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operatios">
        <Button text="+" clickHandler={onClickOperation}/>
        <Button text="-" clickHandler={onClickOperation}/>
        <Button text="*" clickHandler={onClickOperation}/>
        <Button text="/" clickHandler={onClickOperation}/>
        <Button text="=" clickHandler={onClickEqual}/>
    </section>
) //PODEMOS USAR PARA MAS LIMPIEZA Y CUANDO SEA SOLO UNA FUNCION

MathOperations.protoTypes = {
    onClickOperation : PropTypes.func.isRequired,
    onClickEqual : PropTypes.func.isRequired
}

export default MathOperations
