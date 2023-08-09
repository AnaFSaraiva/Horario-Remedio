import Base from './components/Base';
import './App.css'
import Lista from './components/Lista';
import { useState } from 'react';

function App() {
  const listMedicine = JSON.parse(localStorage.getItem("listMedicine") || "[]")
  const [list, setList] = useState(listMedicine)

  return (
    <div className='origem'>
      <Base setList={setList} />
      <section>
        <Lista list={list} />
      </section>
    </div>
  )
}

export default App