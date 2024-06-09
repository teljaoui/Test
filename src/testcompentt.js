 import React, { useState, createContext, useContext } from "react";
const UserContext = createContext();

export default function Authentification() {
    const [utilisateur, setUtilisateur] = useState({ nom: "R2D2", mdp: "Peepo" });
    const [authentifier, setAuthentifier] = useState(false);

    function Valider() {
        var userName = document.querySelector("input[name='name']").value;
        var userPassword = document.querySelector("input[name='pwd']").value;
        const error = "Cet identifiant n'existe pas";
        if (utilisateur.nom === userName && utilisateur.mdp === userPassword) {
            setAuthentifier(true);
        } else {
            alert(error);
        }
    }

    const form = (
        <>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" key="name" />
            <label htmlFor="pwd">Password : </label>
            <input type="text" name="pwd" key="pwd" />
            <br />
            <input type="submit" onClick={Valider} value="valider" />
            <input type="reset" value="annuler" />
        </>
    );

    if (authentifier) {
        return (
            <UserContext.Provider value={utilisateur.nom}>
                <Component2 />
            </UserContext.Provider>
        );
    } else {
        return form;
    }
}

function Component2() {
    return <Component3 />;
}

function Component3() {
    const user = useContext(UserContext);

    return <h1>salamo alaikom {user}</h1>;
}