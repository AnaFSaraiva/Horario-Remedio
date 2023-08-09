import calcTime from "../../utils/calcTime";
import "./List.css";

export default function List({ list }) {
  return (
    list.map((item) =>
      <div className="list" key={item.medicine}>

        <h2>{item.medicine}</h2>

        <div className="listButton">
          {calcTime(item.time, item.amount).map((item) => <button key={item} className="btn-item">{item}</button>)}
        </div>

      </div>
    )
  )

}