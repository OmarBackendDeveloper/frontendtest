import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/data', {
                    headers: { 'x-auth-token': token }
                });
                setUsers(response.data);
            } catch (err) {
                console.error('Error fetching users', err);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User Dashboard</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.nome} {user.cognome} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
