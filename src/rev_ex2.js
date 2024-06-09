import React, { useState } from "react";

import ReactDOM, { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './index.css';

function Recherche() {

  const listNoms = ["Laila","Anass","ikram","Hassan","Amal","Badr","Ihssane"];

  const [list, setList] = useState(listNoms);

  const Rechercher = (e) => {

    if (e.target.value === "") {
      setList(listNoms);
      return;
    }
    const ListRech = listNoms.filter((nom) => nom.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
    setList(ListRech);
  };
  return (
    <div className="app">
      <div>
        Rechercher : <input  type="text" onChange={Rechercher} ></input>
      </div>
      {
        list.map((nom) => (
          <div >{nom}</div> 
        ))}
    </div>
  );
}
export default Recherche;
