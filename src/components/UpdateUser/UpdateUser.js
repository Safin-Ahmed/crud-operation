import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const[user, setUser] = setUser({});
    const {id} = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, [])
    return (
        <div>
            <h2>update {user.name}</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;