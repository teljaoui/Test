import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import "./App.css"
function ListParcinf(props) {
    const [indisp, setIndisp] = useState([]);
    const [val, setVal] = useState();

    useEffect(() => {
        setIndisp(props.ele);
    }, [props.ele]);

    const handlsupp = (id) => {
        const supp = indisp.filter((el) => el.id !== id);
        setIndisp(supp);
    };

    const handlemod = (id) => {
        const updatedIndisp = indisp.map((el) => {
            if (el.id === id) {
                el.qte = val;
            }
            return el;
        });
        setIndisp(updatedIndisp);
    };

    return (
        <div className='container'>
            <table border="1" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>description</th>
                        <th>categorie</th>
                        <th>quantité</th>
                        <th>Etat</th>
                        <th>prix unitaire</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {indisp.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.nom}</td>
                            <td>{ele.description}</td>
                            <td>{ele.categorie}</td>
                            <td>
                                {ele.qte}{' '}
                                <input
                                    type="number"
                                    onChange={(e) => setVal(e.target.value)}
                                />
                            </td>
                            <td>
                                {ele.qte === 0
                                    ? 'epuise '
                                    : ele.qte <= 10
                                        ? 'faible'
                                        : 'disponible'}
                            </td>
                            <td>{ele.prix}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handlsupp(ele.id)}
                                >
                                    Supprimer
                                </button>
                                <button className='btn btn-primary' onClick={() => handlemod(ele.id)}>Modifier</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function Parcitems() {
    const elements = [
        { id: 1, nom: 'Pc5', description: 'Windows xp', categorie: 'ordinateur portable', qte: 0, prix: 1000 },
        { id: 2, nom: 'ecouteur', description: 'smart apple', categorie: 'périphérique', qte: 1, prix: 100 },
        { id: 3, nom: 'Pc5', description: 'Windows xp', categorie: 'logiciel', qte: 0, prix: 1000 },
        { id: 4, nom: 'Pc12', description: 'Windows 11', categorie: 'ordinateur portable', qte: 6, prix: 800 },
        { id: 5, nom: 'Pc gamer', description: 'Windows 10', categorie: 'ordinateur portable', qte: 12, prix: 10000 },
        { id: 6, nom: 'disque dur', description: 'linux', categorie: 'périphérique', qte: 2, prix: 5000 },
        { id: 7, nom: 'photoshop', description: 'adobe photoshop', categorie: 'logiciel', qte: 14, prix: 200 }
    ];

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListParcinf ele={elements} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Parcitems;
