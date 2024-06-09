import React, { Component } from "react";

const UserContext = React.createContext();

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomError: '',
      ageError: '',
      user: { name: '', age: '' },
      submit: false,
    };
  }

  validenom = (event) => {
    const nomValue = event.target.value;
    if (!/^[a-zA-Z]+$/.test(nomValue)) {
      this.setState({ nomError: 'Doit être alphabétique' });
    } else {
      this.setState({
        nomError: '',
        user: { ...this.state.user, name: nomValue },
      });
    }
  };

  valideage = (event) => {
    const ageValue = event.target.value;
    if (isNaN(ageValue)) {
      this.setState({ ageError: 'Doit être numérique' });
    } else {
      this.setState({
        ageError: '',
        user: { ...this.state.user, age: ageValue },
      });
    }
  };

  afficher = (event) => {
    event.preventDefault();
    this.setState({ submit: true });
  };

  render() {
    const { nomError, ageError, user, submit } = this.state;

    const form = (
      <form onSubmit={this.afficher}>
        <fieldset>
          <legend>C.FORM</legend>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" className="nom" onChange={this.validenom} />
          <span className="nomspan" style={{ color: 'red' }}>{nomError}</span><br />
          <label htmlFor="age">Age: </label>
          <input type="text" name="age" className="age" onChange={this.valideage} /><br />
          <span className="agespan" style={{ color: 'red' }}>{ageError}</span>
          <input type="submit" value="soumettre" />
          <input type="reset" value="annuler" />
        </fieldset>
      </form>
    );

    if (submit) {
      return (
        <UserContext.Provider value={user}>
          <Component2 />
        </UserContext.Provider>
      );
    } else {
      return form;
    }
  }
}

class Component2 extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {utilisateur => (
          <h1>Bonjour {utilisateur.name} Vous avez {utilisateur.age} ans</h1>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Formulaire;
