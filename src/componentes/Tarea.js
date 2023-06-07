import React, { useState } from "react";
import "../App.css";

const Tarea = (props) => {
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  const borrarTarea = () => {
    props.borrar(props.id);
  };

  return (
    <div>
      {!modoEdit ? (
        <div className="tarea">
          <span>{props.tarea}</span>
          <button className="botonedit" onClick={editar}>Editar</button>
          <button className="botonborrar" onClick={borrarTarea}>Borrar</button>
        </div>
      ) : (
        <form className="form" onSubmit={submitEdit}>
          <input value={editText} onChange={manejarEdit} />{" "}
          <button className="button">Guardar</button>
        </form>
      )}
    </div>
  );
};

export default Tarea;