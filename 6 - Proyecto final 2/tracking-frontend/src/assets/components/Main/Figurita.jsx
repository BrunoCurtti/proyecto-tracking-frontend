import "../Main/index.css";
import React from "react";
import { useState } from "react";

function Figurita({
  id,
  url_foto,
  categoria,
  nombre,
  la_tengo,
  updateFigurita,
  cantidad,
}) {
  const [laTengo, setLaTengo] = useState(la_tengo);
  const [cant, setCant] = useState(cantidad);


  const handleLaTengo = (id) => {
    setLaTengo(!laTengo);
    updateFigurita(id, cant, !laTengo);
  };

  const sumarUno = (id) => {
    const newCant = cant + 1;
    setCant(newCant);
    setLaTengo(true);
    updateFigurita(id, newCant, laTengo);
  };

  const restarUno = (id) => {
    let newCant = 0;
    if (cant > 1) {
      newCant = cant - 1;
    } else {
      newCant = 0;
      setLaTengo(false);
    }
    setCant(newCant);
    updateFigurita(id, newCant, laTengo);
  };

  return (
    <div className="card__conteiner" key={id}>
      <h1 className="main__name">{nombre}</h1>
      <p className="main__category">{categoria}</p>
      <img className="main__img" src={url_foto} />
      <button
        className="main__la-tengo"
        onClick={() => {
          handleLaTengo(id);
        }}
      >
        ¿La Tengo? {laTengo ? "SI" : "NO"}
      </button>
      <div className="main__counter-wrapper">
        <button className="main__counter-btn" onClick={() => restarUno(id)}>
          -
        </button>
        <p className="main__number"> {cant}</p>
        <button className="main__counter-btn" onClick={() => sumarUno(id)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Figurita;
