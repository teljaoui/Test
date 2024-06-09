import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projet.css';

const Appi3 = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/users');
            const users = response.data;
            setUtilisateurs(users);
        };
        getData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TableUser userinfo={utilisateurs} />} />
                <Route path="/users/:id" element={<UserInfo userc={utilisateurs} />} />
            </Routes>
        </BrowserRouter>
    );
};

const TableUser = (props) => {
    const [enteredId, setEnteredId] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredCity, setEnteredCity] = useState("");
    const navigate = useNavigate();

    const handleIdChange = (e) => {
        setEnteredId(e.target.value);
    };

    const handleNameChange = (e) => {
        setEnteredName(e.target.value);
    };

    const handleCityChange = (e) => {
        setEnteredCity(e.target.value);
    };

    const handleSearch = () => {
        if (enteredId) {
            navigate(`/users/${enteredId}`);
        } else if (enteredName) {
            const user = props.userinfo.find((info) => info.name.toLowerCase() === enteredName.toLowerCase());
            if (user) {
                navigate(`/users/${user.id}`);
            } else {
                alert('User not found by name');
            }
        } else if (enteredCity) {
            const user = props.userinfo.find((info) => info.address.city.toLowerCase() === enteredCity.toLowerCase());
            if (user) {
                navigate(`/users/${user.id}`);
            } else {
                alert('User not found by city');
            }
        } else {
            alert('Please enter ID, Name, or City');
        }
    };

    return (
        <>
            <Navbar
                enteredId={enteredId}
                enteredName={enteredName}
                enteredCity={enteredCity}
                handleIdChange={handleIdChange}
                handleNameChange={handleNameChange}
                handleCityChange={handleCityChange}
                handleSearch={handleSearch}
            />
            <div className="container">
                <div className="m-5 mx-auto">
                    <table border="1" className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Ville</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.userinfo.map((info) => (
                                <tr key={info.id}>
                                    <td><Link to={`/users/${info.id}`}>{info.id}</Link></td>
                                    <td>{info.name}</td>
                                    <td>{info.address.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

const Navbar = ({ enteredId, enteredName, enteredCity, handleIdChange, handleNameChange, handleCityChange, handleSearch }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">List des user</Link>
                <form className="d-flex">
                    <input
                        type="search"
                        id="enteredId"
                        value={enteredId}
                        onChange={handleIdChange}
                        className="form-control me-2"
                        placeholder="Search by ID"
                        aria-label="Search"
                    />
                    <input
                        type="search"
                        id="enteredName"
                        value={enteredName}
                        onChange={handleNameChange}
                        className="form-control me-2"
                        placeholder="Search by Name"
                        aria-label="Search"
                    />
                    <input
                        type="search"
                        id="enteredCity"
                        value={enteredCity}
                        onChange={handleCityChange}
                        className="form-control me-2"
                        placeholder="Search by City"
                        aria-label="Search"
                    />
                    <button onClick={handleSearch} className="btn btn-outline-success" type="button">Search</button>
                </form>
            </div>
        </nav>
    );
};

const UserInfo = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [enteredId, setEnteredId] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const foundUser = props.userc.find((p) => p.id === parseInt(id));
        setUser(foundUser);
    }, [id, props.userc]);

    const handleIdChange = (e) => {
        setEnteredId(e.target.value);
    };

    const handleSearch = () => {
        navigate(`/users/${enteredId}`);
    };

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <>
            <div>
                <Navbar
                    enteredId={enteredId}
                    handleIdChange={handleIdChange}
                    handleSearch={handleSearch}
                />
            </div>
            <div className="id_afficher">
                <p>ID: {user.id}</p>
                <p>Nom: {user.name}</p>
                <p>Entreprise: {user.company.name}</p>
                <p>Email: {user.email}</p>
                <Link to="/" className="linkr">Retourner à l'accueil</Link>
            </div>
            <Footer />
        </>
    );
};
const Footer = () => {
    return (
        <footer className="footer">
            <p>Teljaoui. Copyright Ⓒ 2023</p>
        </footer>
    );
};
export default Appi3;
