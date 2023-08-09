import { useState } from "react";
import "./Base.css";
import PropTypes from 'prop-types'
// import { getLocalstorage, setLocalstorage } from "utils";
export default function Base({ setList }) {
  const [remedio, setRemedio] = useState("");
  const [horario, setHorario] = useState("");
  const [quantidade, setQuantidade] = useState("");


  const saveData = () => {
    const newMedicine = { remedio, quantidade, horario };
    const listMedicine = JSON.parse(localStorage.getItem("listMedicine") || "[]")
    const newListMedicine = [...listMedicine, newMedicine]
    localStorage.setItem("listMedicine", JSON.stringify(newListMedicine));
    setList(newListMedicine)
  };

  return (
    <>
      <form className="formulario">

        <label htmlFor="remedio">Qual o nome do remédio</label>
        <input
          required
          type="text"
          id="remedio"
          placeholder="Qual seu remédio?"
          onBlur={(e) => {
            setRemedio(e.target.value);
          }}
        />
        <label htmlFor="quantidade">Quantas vezes ao dia</label>
        <input
          required
          type="number"
          id="quantidade"
          min={1}
          max={4}
          placeholder="02"
          onBlur={(e) => {
            setQuantidade(e.target.value);
          }}
        />
        <label htmlFor="horario">Qual primeiro horário</label>
        <input
          required
          type="time"
          id="horario"
          onBlur={(e) => {
            setHorario(e.target.value);
          }}
        />

        <button type="button" className="enviar" onClick={saveData}>
          Enviar
        </button>
      </form>
    </ >
  );
}

Base.propTypes = {
  setList: PropTypes.func,
}