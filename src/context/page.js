import React, { createContext } from "react";
import { Layout } from "./Layout";


export const user = { name: 'Mohamed '}
export const UserContext = createContext();

export default function Page(){
    return (
        <UserContext.Provider value={user}>
            <Layout />
        </UserContext.Provider>
    )
}