import React, { useState } from "react";
import Menu from "./Componentes/Menu";
import Sexxxion from "./Componentes/Sexxxion";
import Carrousell from "./Componentes/Carrousell";
import NavBar from "./Componentes/NavBar";

function App() {
  const [content, setContent] = useState("Destacado");

  return (
    <main className="goviernoShy">
      <NavBar />
      <Carrousell />
      <Sexxxion value={content} />
      <Menu
        onClickSeccion={seccion => {
          setContent(seccion);
        }}
      />
    </main>
  );
}

export default App;
