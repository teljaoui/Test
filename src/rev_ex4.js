import React, { useState } from "react";

import ReactDOM, { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';


import './index.css';

function Recherche() {

    const listEtudi = [{ nom: "CHAKIRI", prenom: "Laila", Ville: "Fes", photo: "photo2.jfif" }, { nom: "OUAFI", prenom: "Aanss", Ville: "Tanger", photo: "photo1.jfif" }, { nom: "BADRAOUI", prenom: "ikram", Ville: "meknes", photo: "photo4.jfif" }, { nom: "NACIRI", prenom: "Hassan", Ville: "CASABLANCA", photo: "photo3.jfif" }];
    const [list, setList] = useState(listEtudi);
    const [nomE, setNomE] = useState('');
    const [preE, setPreE] = useState('');
    const [villeE, setVilleE] = useState('');
    const [photoE, setPhotoE] = useState('');

    const AjouerClient = (e) => {
        e.preventDefault();


        /*const tEtud2=[...listEtudi,{nom:nomE,prenom:preE,ville:villeE,photo:photoE}]
        setList(tEtud2)*/
        list.splice(1, 0, { nom: nomE, prenom: preE, ville: villeE, photo: photoE })
        setNomE('');
        setPreE('');
        setVilleE('');
    }



    const Rechercher = (e) => {

        if (e.target.value === "") {
            setList(listEtudi);
            return;
        }
        const ListRech = listEtudi.filter((etud) => etud.nom.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        setList(ListRech);
    };
    return (
        <div className="app">
            <div>
                <form onSubmit={AjouerClient}>

                    <pre>Nom    :   <input type="Text" value={nomE} onChange={(e) => { setNomE(e.target.value) }}  ></input><br></br></pre>
                    <pre>Prénom :   <input type="Text" value={preE} onChange={(e) => { setPreE(e.target.value) }}  ></input></pre>
                    <pre>Ville   :  <select value={villeE} onChange={(e) => { setVilleE(e.target.value) }} >

                        <option value="FES">FES</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Tanger">Tanger</option>
                        <option value="Casa">Casa</option>
                        <option value="NADOR">NADOR</option>
                    </select></pre><br></br>

                    <pre>Photo  :  <input type="file" value={photoE} onChange={(e) => { setPhotoE(e.target.value) }} ></input></pre>
                    <br></br><br></br>
                    <input type="submit" value="Ajouter Client"></input>
                </form>
            </div>
            <br></br><br></br>
            <div>
                Rechercher : <input type="text" onChange={Rechercher} ></input>
            </div>
            {
                list.map((etud) => (
                    <div >{etud.nom}</div>
                ))}

            <main className="container">
                <h1>Liste des étudiants </h1>
                <div className="row mb-2">
                    {list.map((etud) => (


                        <div className="col">
                            <div className="">
                                <img className="" height={180} width="180px" src={etud.photo} alt="" />
                                <div className="card-body">
                                    <p className="card-title"></p>


                                    <p className="card-text">{etud.nom + '    ' + etud.prenom}</p>
                                    <p className="card-text">{etud.Ville}</p>
                                    <p className="card-text">{etud.photo}</p>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Supprimer</button>

                                </div>
                            </div>
                        </div>




                    ))}
                </div>
            </main>
        </div>
    );
}
export default Recherche;