import { useState, createContext, useContext } from "react";
//le Context de react permet de partager un état globalement
const UserContext = createContext();  //Creation 
export default function Component1() {
    const [user, setUser] = useState("Mohammed");
    return (
        <UserContext.Provider value={user}> //Affecter une valeur
            <h1>{`Salam alaikom ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}
function Component5() {
    //lire le contexte
    const utilisateur = useContext(UserContext);
    return (<>
        <h1>Component 5</h1>
        <h2>{`Salam alaikom ${utilisateur} Encore!`}</h2>
    </>
    );
}

function Component2() {
    return (<><h1>Component 2</h1>
        <Component3 /> </>);
}   
function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}