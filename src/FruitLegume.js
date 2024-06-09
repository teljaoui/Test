import React, { useState } from "react";

const ComposantResultaList = () => {
    const initialInput = '';
    const [searchInput, setSearchInput] = useState(initialInput);
    const [filteredItems, setFilteredItems] = useState([]);

    const fruitLegume = [
        { nom: 'tomato', type: 'legume' },
        { nom: 'carotte', type: 'legume' },
        { nom: 'pome de terre', type: 'legume' },
        { nom: 'navet', type: 'legume' },
        { nom: 'poivron', type: 'legume' },
        { nom: 'banana', type: 'fruit' },
        { nom: 'orange', type: 'fruit' },
        { nom: 'pomme', type: 'fruit' },
        { nom: 'raisin', type: 'fruit' },
        { nom: 'kiwi', type: 'fruit' },
    ];

    const handeleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSeatch = () => {
        const filteredList = fruitLegume.filter(item => item.type === searchInput.toLocaleLowerCase());
        setFilteredItems(filteredList);
    };
    return (
        <div>
            <label>
                type (legume or fruit):
                <input type="text" value={searchInput} onChange={handeleInputChange} />
            </label>

            <button onClick={handleSeatch}>chercher</button>
            <ul>
                {filteredItems.map((item, index) => (<li key={index}>{item.nom}</li>))}
            </ul>
        </div>
    )

};



export default function Appp (){
    return (
        <div>
            <h1>Fruit  and Vegetanles List</h1>
            <ComposantResultaList />
        </div>
    )
}