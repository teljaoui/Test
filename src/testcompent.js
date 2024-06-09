import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Authentification() {
    const [users, setUsers] = useState({ nom: "test", mdp: "test" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function Valider() {
        const enteredUsername = document.querySelector("input[name='name']").value;
        const enteredPassword = document.querySelector("input[name='pwd']").value;

        if (users.nom === enteredUsername && users.mdp === enteredPassword) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <>
            <label for="name">Name : </label>
            <input type="text" name="name" key="name" onChange={(e) => { setUsers({ ...users, nom: e.target.value }); }}/>
            <label for="pwd">Password : </label>
            <input type="text" name="pwd" key="pwd" />
            <br />
            <button onClick={Valider}>Valider</button>
            <button onClick={window.close}>Annuler</button>

            <UserContext.Provider value={isLoggedIn}>
                {
                    
                }
            </UserContext.Provider>
        </>
    );
}