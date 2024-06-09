import { useEffect, useState } from "react"

function Mousse(){
    const [X , setX]=useState(0)
    const [Y , setY]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove" , Moussemove)
    },[])
    function Moussemove(e){
        setX(e.pageX)
        setY(e.pageY)
    }
    return(
        <div>
            <h1>récupirés des coordonée de la souris</h1>
            <p>coordonée x:{X}, Y: {Y}</p>
        </div>
    )
}
export default Mousse