import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    
    const navigate = useNavigate();

    
    const loginClick = () => {
        navigate('/login');
    };

    return (
        <div className='wrapper'>
            <form action=''>
                <h1 className='mit'>Welcome To Maitreya Technology Services</h1>
                <div className='home-button'>
                    <button className='button' type='button' onClick={loginClick}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default HomePage;
