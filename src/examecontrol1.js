import React, { useContext, useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

const ProdContext = createContext();

export default function App() {
    const [useProd, setProd] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/products");
                const products = response.data;
                setProd(products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);

    return (
        <BrowserRouter>
            <ProdContext.Provider value={{ useProd, setProd }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Uncomment the following lines when you have corresponding components */}
                    {/* <Route path="/Ajout" element={<Ajout />} /> */}
                    {/* <Route path="/ProdEp" element={<Epuiser />} /> */}
                    {/* Your existing routes */}
                </Routes>
            </ProdContext.Provider>
        </BrowserRouter>
    );
}

function Home() {
    const prod = useContext(ProdContext);


    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Categorie</th>
                        <th>Quantité</th>
                        <th>Etat</th>
                        <th>Prix Unitaire</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ParcItems />
                </tbody>
            </table>
        </>
    );
}
function ParcItems() {
    const prod = useContext(ProdContext);
    const Etat = (qte) => {
        if (qte >= 10) {
            return <>Disponible</>
        }
        else if (qte >= 1) {
            return <>Faible</>
        }
        else {
            return <>Epuisé</>
        }

    }
    return (<>
        {prod.useProd.map((e) => (
            <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.nom}</td>
                <td>{e.description}</td>
                <td>{e.categorie}</td>
                <td>{e.quantite_en_stock}</td>
                <td>{Etat(e.quantite_en_stock)}</td>
                <td>{e.prix_unitaire}</td>
                <td><button className="btn btn-primary">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button></td>
            </tr>
        ))}</>)
}