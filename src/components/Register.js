import React, { useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const Register = () => {
    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [corso, setCorso] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', { nome, cognome, telefono, email, corso });
            alert('User registered successfully');
        } catch (err) {
            console.error('Registration error', err);
            alert('Error registering user');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Cognome</label>
                    <input type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} />
                </div>
                <div>
                    <label>Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Corso</label>
                    <select value={corso} onChange={(e) => setCorso(e.target.value)}>
                        <option value="">Select</option>
                        <option value="react">React</option>
                        <option value="vuejs">Vue.js</option>
                        <option value="nodejs">Node.js</option>
                        <option value="mongodb">MongoDB</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
};



export default Register;
