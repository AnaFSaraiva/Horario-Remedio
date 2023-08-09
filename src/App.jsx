import Base from './components/Base';
import './App.css'
import List from './components/List';
import { useState } from 'react';

function App() {
  const listMedicine = JSON.parse(localStorage.getItem("listMedicine") || "[]")
  const [list, setList] = useState(listMedicine)

  return (
    <div className='origem'>
      <Base setList={setList} />
      <section>
        <List list={list} />
      </section>
    </div>
  )
}

export default App