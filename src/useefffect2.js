import { useEffect, useState } from "react";

export default function Effect() {
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then((data) => setUsers(data));
        }, []);

    useEffect(() => {
        setFilter(users);
    }, [users]);

    useEffect(() => {
        const filteredUsers = users.filter(
            user => user.name && user.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilter(filteredUsers);
    }, [input, users]);

    return (
        <>
            <input type="search" onChange={e => setInput(e.target.value)}></input>
            {filter.map(
                user => <h1 key={user.id}>{user.name}</h1>
            )}
        </>
    );
}
