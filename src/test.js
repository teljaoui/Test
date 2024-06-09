import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Link, useParams } from "react-router-dom";
import axios from 'axios';
function Main4() {
    const [utilisateurs, setUtilisateurs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/users');
            const users = response.data;
            setUtilisateurs(users);
        }
        getData();
    }, []);

    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/" className="link btn">HOME</Link></li>
                    <li><Link to="/users" className="link btn">List Users</Link></li>
                    <li><Link to="/search" className="link btn">Chercher Users</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<List title={utilisateurs} />} />
                <Route path="/users/:id" element={<Listinfo title={utilisateurs} />} />
                <Route path="/users/company/:company" element={<Company title={utilisateurs} />} />
                <Route path="/search" element={<Search title={utilisateurs} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
function Company(props){
    const { company } = useParams()
    const [listEmp, setListEmp] = useState([])
    useEffect(() => {
        const main = props.title.filter(prop => prop.company.name == company);
        setListEmp(main);
    }, [company, props.title]);

    return (
        <div>
            <h1>List Employer travail a {company}</h1>
            {listEmp.map(emp=>(
                <h2>{emp.name}</h2>
            ))}
        </div>
    )
}

function Search(props) {
    const utilisateurs = props.title;
    const [id, setId] = useState(0);
    const [company, setComapny] = useState("");

    const handleChangeId = (e) => {
        setId(e.target.value);
    }

    const handleChangeNom = (e) => {
        const p = utilisateurs.find(per => per.name === e.target.value);
        if (p) {
            setId(p.id);
        } else {
            setId(0); 
        }
    }
    const handleChangeEmail = (e) => {
        const p = utilisateurs.find(per => per.email === e.target.value);
        if (p) {
            setId(p.id);
        } else {
            setId(0); 
        }
    }
    const handleChangeCompany = (e) => {
        setComapny(e.target.value)
    }

    return (
        <div>
            <h2>Search for a User</h2>

            <input placeholder="Enter User ID" type="text" onChange={handleChangeId} />
            <Link to={`/users/${id}`}><button type="button" className="btn btn-outline-primary">Search by ID</button></Link>

            <input placeholder="Enter User Name" type="text" onChange={handleChangeNom} />
            <Link to={`/users/${id}`}><button type="button" className="btn btn-outline-primary">Search by Name</button></Link>

            <input placeholder="Enter User Email" type="text" onChange={handleChangeEmail} />
            <Link to={`/users/${id}`}><button type="button" className="btn btn-outline-primary">Search by Email</button></Link>

            <input placeholder="Enter Company name" type="text" onChange={handleChangeCompany} />
            <Link to={`/users/company/${company}`}><button type="button" className="btn btn-outline-primary">Search Company name</button></Link>

        </div>
    );
}


function Home() {
    return (
        <div>
            <h1>Welcome to the Home page</h1>
            <p>This is the axios project to display users and search for user information using their ID or Name.</p>
        </div>
    );
}

function Listinfo(props) {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const main = props.title.find(prop => prop.id == id);
        setUser(main);
    }, [id, props.title]);

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h3>ID: {user.id}</h3>
            <h3>Nom: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>

            <h3>
                <Link to="/users" className="btn btn-outline-primary">Retourner au list</Link>
                {' OR '}
                <Link to="/search" className="btn btn-outline-primary">Chercher</Link>
            </h3>
        </div>
    );
}

function List(props) {
    return (
        <div className="par">
            <table border={1} style={{ width: "100%" }}>
                <tr className="table-primary">
                    <th>ID</th>
                    <th>NOME</th>
                    <th>VILLE</th>
                </tr>
                {props.title.map(user => (
                    <tr className="table-Primary" key={user.id}>
                        <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
                        <td>{user.name}</td>
                        <td>{user.address.city}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

const Footer = () => {
    return (
        <footer className="footer">
            <p>This is the footer. Copyright Ⓒ 2023</p>
        </footer>
    );
};

export default Main4;