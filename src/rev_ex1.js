import React from "react";

import ReactDOM, { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './index.css';
class Clients extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ListeClients: [{ id: 1, nom: "CHAKIRI ALI", age: 22 }, { id: 2, nom: "OUAFI Fatima", age: 23 }, { id: 3, nom: "FATIHI Laila", age: 25 }], Tnom: '', Tage: '', Tid: 4 }

    }
    AjouerClient = (e) => {
        e.preventDefault();
        this.setState({ Tid: this.state.Tid + 1 })
        console.log(this.state.Tid)
        /*const tClient2=[...this.state.ListeClients,{id:this.state.Tid,nom:this.state.Tnom,age:this.state.Tage}]
         this.setState({ListeClients:tClient2})*/
        this.state.ListeClients.splice(this.state.Tid - 1, 0, { id: this.state.Tid, nom: this.state.Tnom, age: this.state.Tage })
        this.setState({ Tnom: '', Tage: '' })
    }
    supprimer = (id1) => {
        const index = this.state.ListeClients.findIndex(client => client.id == id1)
        console.log(index)
        const ListeClients2 = [...this.state.ListeClients]
        ListeClients2.splice(index, 1)
        this.setState({ ListeClients: ListeClients2 })
    }
    render() {
        const LClient = this.state.ListeClients.map((client) => (<tr key={client.id}><td >{client.id}</td><td > {client.nom} </td><td >{client.age}</td>
            <td><button onClick={() => { this.supprimer(client.id) }}>&#10005;</button></td></tr>))
        return (<div>
            <form onSubmit={this.AjouerClient}>
                Nom :<input type="Text" value={this.state.Tnom} onChange={(e) => this.setState({ Tnom: e.target.value })}></input>
                Age :<input type="Text" value={this.state.Tage} onChange={(e) => this.setState({ Tage: e.target.value })}></input>

                <input type="submit" value="Ajouter Client"></input>
                <h2>Liste des Clients</h2><table border="1"><tr><th width="15%">Id</th><th width="25%">Nom prénom</th><th width="25%">Age</th></tr>{LClient}
                </table>    </form></div>)

    }
}

export default Clients;