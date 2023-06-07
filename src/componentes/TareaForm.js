import React, { useState } from "react";
import "../App.css";

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  return (
    <div className="form">
      <form className="form" onSubmit={submit}>
        <h1>TO DO LIST</h1>
        <span>Escriba una nueva tarea</span>
        <input value={inputText} onChange={manejarFormulario} />
        <button className="button">Crear</button>
      </form>
      {!validacion && (
        <div className="validacion">Escriba una tarea</div>
      )}
    </div>
  );
};

export default TareaForm;