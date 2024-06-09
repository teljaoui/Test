import React, {useContext} from "react";
import { UserContext } from "./page";


 
export default function User(){
    const user = useContext(UserContext);
     return(
        <div>
            <h1>{user.name}</h1>
        </div>
     )
}