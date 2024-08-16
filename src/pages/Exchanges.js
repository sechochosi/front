import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Exchanges = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [exchanges, setExchanges] = useState([]);
    const navigate = useNavigate();

    const exchangesSubmit = async (e) => {
        e.preventDefault();
        if (title.trim() && author.trim()) {
            try {
                await axios.post('/api/exchanges', { title, author });
                fetchExchanges(); // Actualiza la lista de intercambios
                setTitle('');
                setAuthor('');
            } catch (error) {
                console.error('Error creating exchange:', error);
            }
        }
    };

    const fetchExchanges = async () => {
        try {
            const response = await axios.get('/api/exchanges');
            console.log(response.data); // Verifica los datos
            setExchanges(response.data);
        } catch (error) {
            console.error('Error fetching exchanges:', error);
        }
    };

    useEffect(() => {
        fetchExchanges();
    }, []);

    const viewDetails = (id) => {
        navigate(`/exchanges/${id}`);
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: 'auto'
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    };

    return (
        <div>
            <form onSubmit={exchangesSubmit} style={formStyle}>
                <h2>Request a Book</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Book Title"
                    style={inputStyle}
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Request Book</button>
            </form>

            <h2>List of Exchanges</h2>
            <ul>
                {exchanges.length > 0 ? (
                    exchanges.map(exchange => (
                        <li key={exchange._id}>
                            <span>{`Book: ${exchange.title}, Author: ${exchange.author}`}</span>
                            <button onClick={() => viewDetails(exchange._id)}>View Details</button>
                        </li>
                    ))
                ) : (
                    <li>No exchanges available.</li>
                )}
            </ul>
        </div>
    );
};

export default Exchanges;
