import React from "react";

class Jeux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            face: null,
            compteur: 0,
            end: false,
        };
    }

    jouer = () => {
        let faceVal = Math.floor(Math.random() * 6 + 1)
        this.setState({
            face: faceVal,
            compteur: this.state.compteur + 1,
        });
        if (faceVal == this.props.cache) {
            this.setState({
                end: true
            })
        }
    };
    init =()=>{
        this.setState ({
            face: null,
            compteur: 0,
            end: false,
        });
    }

    render() {
        return (
            <div>
                <img src={
                    this.state.face == null ? "images/init.PNG" : `images/face${this.state.face}.PNG`
                } />
                <h1>Jeu de Dé</h1>
                <p>face: {this.state.face}</p>
                <p>nombre d'essais : {this.state.compteur}</p>
                {
                    this.state.end ? <div><p>Bravo vous avez trouver la face cachée</p>
                        <button onClick={this.init}>renitialiser</button></div>
                        :
                        <button onClick={this.jouer}>Jouer</button>
                }
            </div>
        );
    }
}

export default Jeux;
