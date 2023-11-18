import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(URL).then(({ data }) => {
            setUsers(data);
        });
    }, []);
    return (
        <div className='users'>
            {
                users.map(({ id, username, email }) => {
                    return <NavLink to={`/user/${id}`} className='user' key={id}>
                        <h2>{username}</h2>
                        <p>{email}</p>
                    </NavLink>
                })
            }
        </div>
    )
}

export default Users