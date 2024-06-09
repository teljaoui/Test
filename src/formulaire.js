import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Formulaire() {
    const [nomError, setNomError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [user, setUser] = useState({ name: '', age: '' });
    const [submit, setSubmit] = useState(false);

    const validenom = (event) => {
        const nomValue = event.target.value;
        if (nomValue === '') {
            setNomError('')
        }
        else if (!/^[a-zA-Z]+$/.test(nomValue)) {
            setNomError('Doit être alphabétique');
        }
        else {
            setNomError('');
            setUser((add) => ({ ...add, name: nomValue }));
        }
    };

    const valideage = (event) => {
        const ageValue = event.target.value;
        if (ageValue === '') {
            setAgeError('')
        }
        else if (isNaN(ageValue)) {
            setAgeError('Doit être numérique');
        }
        else {
            setAgeError('');
            setUser((add) => ({ ...add, age: ageValue }));
        }
    };
    const afficher = (event) => {
        event.preventDefault();

        const nomValue = document.querySelector(".nom").value;
        const ageValue = document.querySelector(".age").value;
        const messageValue = document.querySelector(".message").value;

        if (nomValue === "") {
            alert("remplire le nom")
            return;
        }
        if (ageValue === "") {
            alert("remplire l'age")
            return;
        }
        if (messageValue === "") {
            alert("Remplissez le champ message");
            return;
        }
        const genreValue = document.querySelector('input[name="genre"]:checked');
        if (!genreValue) {
            alert("Sélectionnez le genre");
            return;
        }
        const formationsValues = document.querySelectorAll('input[name="formation"]:checked');
        if (formationsValues.length === 0) {
            alert("Sélectionnez au moins une formation");
            return;
        }
        setSubmit(true);
    };



    const form = (
        <form onSubmit={afficher}>
            <fieldset>
                <legend>C.FORM</legend>
                <label>Name: </label>
                <input type="text" name="name" className="nom" onChange={validenom} />
                <span className="nomspan" style={{ color: 'red' }}>{nomError}</span><br />
                <label>Age: </label>
                <input type="text" name="age" className="age" onChange={valideage} />
                <span className="agespan" style={{ color: 'red' }}>{ageError}</span><br></br>
                <label>Message: </label>
                <textarea cols={25} rows={4} className="message"></textarea><br />
                <fieldset>
                    <legend>Genre</legend>
                    <input type="radio" name="genre"></input>Homme
                    <input type="radio" name="genre"></input>Femme
                </fieldset>
                <fieldset>
                    <legend>Formation</legend>
                    <input type="checkbox" name="formation"></input>Word
                    <input type="checkbox" name="formation"></input>Excel
                    <input type="checkbox" name="formation"></input>PPt
                </fieldset>
                <input type="submit" value="soumettre" />
                <input type="reset" value="annuler" />
            </fieldset>
        </form>
    );

    if (submit) {
        return (
            <UserContext.Provider value={user}>
                <Component2 />
            </UserContext.Provider>
        );
    } else {
        return form;
    }
}

function Component2() {
    const utilisateur = useContext(UserContext);
    return <h1>Bonjour {utilisateur.name} Vous avez {utilisateur.age} ans</h1>;
}
