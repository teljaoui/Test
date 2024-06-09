import React from 'react';

class Form1C extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nom: '', age: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === 'nom') this.setState({ nom: event.target.value });
        else this.setState({ age: event.target.value });
    }

    handleSubmit(event) {
        if (/^[a-z]+$/gi.exec(this.state.nom) && /^[0-9]+$/g.exec(this.state.age)) {
            alert(`${this.state.nom}, ${this.state.age} a été soumis`);
        } else {
            alert("Il y a des erreurs, n'a pas été soumis");
            event.preventDefault();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom : <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
                </label>
                <label>
                    Age : <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}

export { Form1C };
