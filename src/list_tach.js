import React, { useState } from 'react';
import './App.css'
function Taches(props) {
    const [list, setList] = useState([]);

    const ajouter = () => {
        const tacheInput = document.querySelector('.tache');
        setList([...list, tacheInput.value]);
        tacheInput.value = '';
    };
    const supprimer = (i) => {
        const uplist = [...list];
        uplist.splice(i, 1);
        setList(uplist);
    }
    const deletall =()=>{
        setList([])
    }
    return (
        <div className="App taches">
            <h1>Liste des Tâches</h1>
            <input type="text" className="tache" />
            <button onClick={ajouter}>Ajouter</button>
            <br></br>
            <button className="deletall" onClick={deletall}>Supprimer tous!</button>
            <ul className="list_taches">
                {list.map((e, i) => (
                    <li key={i} >{e}<button onClick={() => supprimer(i)} className="sup">Supprimer</button></li>
                ))}
            </ul>
        </div>
    );
}

export default Taches;
