import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';


const RegisterPage = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{



      e.preventDefault();

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      try {
        await instance.post('/register', { name, email, password });
        // Redirect to login or home page
        navigate('/login'); 

      } catch (error) {
        setError(error.response?.data?.message || 'Registration failed');
      }

    }


  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Register</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>

        </form>
    </div>
    
  )
}

export default RegisterPage