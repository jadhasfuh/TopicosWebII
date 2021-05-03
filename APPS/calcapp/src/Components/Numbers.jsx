import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = onClickNumber => {
  const renderButton = number => (
    <Button
      text={number.toString()}
      clickHandler={onClickNumber}
      key={number}
    />
  )
  return numbers.map(renderButton);
}

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">
    {renderButtons(onClickNumber)}
  </section>
);

Numbers.protoTypes = {
  onClickNumber: PropTypes.func.isRequired
}

export default Numbers;