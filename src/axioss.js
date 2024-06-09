import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const Appi3 = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/users')
            const users = response.data;
            setUtilisateurs(users)
        }
        getData()
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TableUser userinfo={utilisateurs} />} />
                <Route path="/users/:id" element={<UserInfo userc={utilisateurs} />} />
            </Routes>
        </BrowserRouter>
    );
}

const TableUser = (props) => {
    const [enteredId, setEnteredId] = useState("");
    const navigate = useNavigate();

    const handleIdChange = (e) => {
        setEnteredId(e.target.value);
    };

    const handleSearch = () => {
        navigate(`/users/${enteredId}`);
    };

    return (
        <>
            <div>
                <table border="1">
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
            </div><br></br>
            <div>
                <label htmlFor="enteredId">Enter ID: </label>
                <input
                    type="text"
                    id="enteredId"
                    value={enteredId}
                    onChange={handleIdChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </>
    );
}

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
        <div>
            <p>ID: {user.id}</p>
            <p>Nom: {user.name}</p>
            <p>Entreprise: {user.company.name}</p>
            <p>Email: {user.email}</p>
            <Link to="/">Retourner à l'accueil</Link>
        </div>
    );
}

export default Appi3;
