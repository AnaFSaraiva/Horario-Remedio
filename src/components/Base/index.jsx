import { useState } from "react";
import "./Base.css";
import PropTypes from 'prop-types'
// import { getLocalstorage, setLocalstorage } from "utils";
export default function Base({ setList }) {
  const [medicine, setMedicine] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const isDisable = !medicine || !amount || !time

  const saveData = () => {
    const newMedicine = { medicine, amount, time };
    const listMedicine = JSON.parse(localStorage.getItem("listMedicine") || "[]")
    const newListMedicine = [...listMedicine, newMedicine]
    localStorage.setItem("listMedicine", JSON.stringify(newListMedicine));
    setList(newListMedicine)
    setAmount("")
    setTime("")
    setMedicine("")
  };

  return (
    <>
      <form className="form">

        <label htmlFor="medicine">Qual o nome do remédio</label>
        <input
          required
          type="text"
          id="medicine"
          placeholder="Qual seu remédio?"
          value={medicine}
          onChange={(e) => {
            setMedicine(e.target.value);
          }}
        />
        <label htmlFor="amount">Quantas vezes ao dia</label>
        <input
          required
          type="number"
          id="amount"
          min={1}
          max={4}
          placeholder="02"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <label htmlFor="time">Qual primeiro horário</label>
        <input
          required
          type="time"
          id="time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />

        <button type="button" onClick={saveData} disabled={isDisable}>
          Enviar
        </button>
      </form>
    </ >
  );
}

Base.propTypes = {
  setList: PropTypes.func,
}