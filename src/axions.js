import React, { useEffect, useState } from "react";
import axios from "axios";
/*Axios bibliothèqye js, fonctionne comme un client HTTP */
export default function Appi() {
    const [utilisateur, setUtilisateurs] = useState([])
    useEffect(() => { 
        axios.get('http://jsonplaceholder.typicode.com/users').then
        ((res)=>{ setUtilisateurs(res.data) })
    },[]);
    return (
        <div>
            <h1>nombre d'utilisateur: {utilisateur.length}</h1>
        </div>
    )

}