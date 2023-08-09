import calculoHorario from "../../utils/calculoHorario";
import "./Lista.css";

export default function Lista({ list }) {

  return (
    list.map((item) =>
      <div className="list" key={item.remedio}>

        <h2>{item.remedio}</h2>

        <div className="listButton">
          {calculoHorario(item.horario, item.quantidade).map((item) => <button key={item} className="active">{item}</button>)}
        </div>

      </div>
    )
  )

}