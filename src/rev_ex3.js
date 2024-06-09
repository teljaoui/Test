import React from "react";

import ReactDOM, { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './index.css';
class Clients extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ListeClients: [{ id: 1, nom: "CHAKIRI ALI", ville: "NADOR", dateN: "22/01/2004", genre: "Homme", interet: "Sport,Internet" }, { id: 2, nom: "OUAFI Fatima", ville: "RABAT", dateN: "02/03/2007", genre: "Femme", interet: "Voyage,Internet,Sport" }, { id: 3, nom: "FATIHI Laila", ville: "FES", dateN: "17/11/2005", genre: "Femme", interet: "Sport" }], Tnom: '', Tville: '', TN: '', Tgenre: 'Homme', Tinteret: '', Tid: 4 }

    }
    AjouerClient = (e) => {
        e.preventDefault();
        this.setState({ Tid: this.state.Tid + 1 })
        console.log(this.state.Tid)
        /*const tClient2=[...this.state.ListeClients,{id:this.state.Tid,nom:this.state.Tnom,age:this.state.Tage}]
         this.setState({ListeClients:tClient2})*/
        this.state.ListeClients.splice(this.state.Tid, 0, { id: this.state.Tid, nom: this.state.Tnom, dateN: this.state.TN, ville: this.state.Tville, genre: this.state.Tgenre, interet: this.state.Tinteret })
        this.setState({ Tnom: '', TN: '', Tville: '', Tinteret: '' })
    }
    supprimer = (id1) => {
        const index = this.state.ListeClients.findIndex(client => client.id == id1)
        console.log(index)
        const ListeClients2 = [...this.state.ListeClients]
        ListeClients2.splice(index, 1)
        this.setState({ ListeClients: ListeClients2 })
    }
    render() {
        const LClient = this.state.ListeClients.map((client) => (<tr key={client.id}><td >{client.id}</td><td > {client.nom} </td><td > {client.ville} </td><td >{client.dateN}</td><td >{client.genre}</td><td >{client.interet}</td>
            <td><button onClick={() => { this.supprimer(client.id) }}>&#10005;</button></td></tr>))
        return (
            <div className="login-form">


                <form onSubmit={this.AjouerClient}>

                    Nom :<input type="Text" value={this.state.Tnom} onChange={(e) => this.setState({ Tnom: e.target.value })}></input><br></br><br></br>
                    Ville :<select value={this.state.Tville} onChange={(e) => this.setState({ Tville: e.target.value })}><br></br><br></br>
                        <option value="FES">FES</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Tanger">Tanger</option>
                        <option value="Casa">Casa</option>
                        <option value="NADOR">NADOR</option>
                    </select><br></br><br></br>
                    Date Naissance :<input type="date" value={this.state.TN} onChange={(e) => this.setState({ TN: e.target.value })}></input><br></br><br></br>
                    Genre: <br></br><br></br>
                    Homme :<input type="radio" name="tg" value="Homme" onChange={(e) => this.setState({ Tgenre: e.target.value })} checked></input><br></br>
                    Femme :<input type="radio" name="tg" value="Femme" onChange={(e) => this.setState({ Tgenre: e.target.value })}></input>
                    <br></br><br></br>

                    Interert :<br></br><br></br>
                    Sport    :<input type="checkbox" name="tinter" value="Sport" onChange={(e) => this.setState({ Tinteret: this.state.Tinteret + ' ' + e.target.value })}></input><br></br>
                    Internet :<input type="checkbox" name="tinter" value="Internet" onChange={(e) => this.setState({ Tinteret: this.state.Tinteret + ' ' + e.target.value })}></input><br></br>
                    Voyage   :<input type="checkbox" name="tinter" value="Voyage" onChange={(e) => this.setState({ Tinteret: this.state.Tinteret + ' ' + e.target.value })}></input>
                    <br></br><br></br>

                    <input type="submit" value="Ajouter Client"></input>
                    <h2>Liste des Clients</h2><table border="1"><tr><th width="15%">Id</th><th width="25%">Nom prénom</th><th width="25%">Ville</th><th width="25%">Date Naissance</th><th width="25%">Genre</th><th width="25%">Intérets</th></tr>{LClient}
                    </table>    </form></div>)

    }
}
export default Clients;