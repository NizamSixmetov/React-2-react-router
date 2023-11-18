import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const URL = 'https://jsonplaceholder.typicode.com/users/';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get(URL + id).then(({ data }) => {
            setUser(data)
        });
    }, []);
    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    )
}

export default UserDetail