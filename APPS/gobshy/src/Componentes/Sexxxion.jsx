import React from "react";
import "./Style.css";
import { LoremIpsum } from "react-lorem-ipsum";

const Sexxxion = ({ value }) => {
  return (
    <div id="Sexion">
      <h1>{value}</h1>
      <LoremIpsum p={3} avgWordsPerSentence={7} avgSentencesPerParagraph={10} />
      <img
        src="https://i.picsum.photos/id/52/200/300.jpg?hmac=inayaUU4kX3byMsd5J9f69GP4-Tt78mJ9lD21t34Cks"
        alt="Corrupto"
      />
      <LoremIpsum p={3} avgWordsPerSentence={7} avgSentencesPerParagraph={10} />
    </div>
  );
};

export default Sexxxion;
