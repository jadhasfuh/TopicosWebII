import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const signs = ["+", "-", "*", "/"];

const renderButtons = onClickOperation => {
  const renderButton = signs => (
    <Button
      text={signs}
      clickHandler={onClickOperation}
      key={signs}
    />
  )
  return signs.map(renderButton);
}

const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="math-operatios">
    {renderButtons(onClickOperation)}
    <Button text="=" clickHandler={onClickEqual} />
  </section>
) //PODEMOS USAR PARA MAS LIMPIEZA Y CUANDO SEA SOLO UNA FUNCION

MathOperations.protoTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired
}

export default MathOperations
