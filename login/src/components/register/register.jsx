
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    
    const navigate = useNavigate();

    
    const loginClick = () => {
        navigate('/register');
    };

    return (
        <div className='wrappe'>
            <form action=''>
                <div className="h">
                <h1>Register Page</h1>
                </div>
                <div>
                <div className='input-box'><input type="text" placeholder='Name' /></div>
                <div className='input-box'><input type="email" placeholder='Email-id' /></div>
               <div className='input-box'><input type="text" placeholder='Password' /></div> 
                <div className='input-box'><input type="text" placeholder='Re-Enter Password' /></div>
                <div className='submit-button'>
                    <button className='buttons' type='submit'>
                         Submit
                    </button>
                </div>
                </div>
               
            </form>
        </div>
    );
};

export default Register;
