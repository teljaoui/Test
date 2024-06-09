import React, { useEffect } from "react";

function BienvenueH() {
    useEffect(() => {
        console.log("ComponentDidMount");
        return () => {
            console.log("Composant démonté du DOM");
        };
    }, [])
// [] Listede variables qui déclenchent useEffect
    return(
        <div>
            <h1>Bienvenue !</h1>
        </div>
    )
}

export default BienvenueH;