import { useState } from "react";

function Formulaire(){
    const[nom, setnom]= useState("")
    const[password, setpassword]= useState("")
    const[date, setdate]= useState("")
    const[ville, setville]= useState("")
    const[genre, setgenre]=useState("")
    const[Loisire, setLoisire]= useState([])
    function addloisire(e){
        if(!Loisire.includes(e.target.value)){
            setLoisire([...Loisire, e.target.value])
        }else{
            setLoisire([...Loisire.filter((item)=>item!==e.target.value)])
        }
    }
    function affciher(e){
        alert(
            `${nom}  ${password}  ${date}  ${ville}  ${genre}  ${Loisire.join(",")}` 
        )
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={(e)=> affciher(e)}>
                Nom <input type="text" name="nom"   onChange={(e)=>setnom(e.target.value )}/><br />
                Mot de passe <input type="password" name="password" onChange={(e)=>setpassword(e.target.value )}/><br />
                Date de naissance <input type="date" name="date" onChange={(e)=>setdate(e.target.value )}/><br />
                Ville <select name="ville" onChange={(e)=>setville(e.target.value )}>
                    <option>choisir une ville</option>
                    <option value="rabat">rabat</option>
                    <option value="temara">temara</option>
                    <option value="salé">salé</option>
                </select><br />
                Genre 
                <input type="radio" name="genre" value="Homme" onChange={(e)=>setgenre(e.target.value )}></input>Homme
                <input type="radio" name="genre" value="Femme" onChange={(e)=>setgenre(e.target.value )}></input>Femme
                <br />
                Loisire   <input type="checkbox" name="genre" value="sport" onChange={(e)=>addloisire(e)}></input>sport <input type="checkbox" name="genre" value="lecture" onChange={(e)=>addloisire(e)}></input>lecture <input type="checkbox" name="genre" value="music" onChange={(e)=>addloisire(e)}></input>music
                <br />
                <input type="submit" value="submit"></input> 
            </form>
        </div>
    )
}
export default Formulaire;