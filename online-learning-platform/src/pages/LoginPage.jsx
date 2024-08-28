import React, { useState } from 'react';
import instance from '../api/axios';


const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        instance.post('/login',{ email, password })
        .then(response =>{
            console.log(response.data);
            // Store JWT token
            localStorage.setItem('token', response.data.token);
            // Redirect to dashboard
        })
        .catch(error => console.error(error));
    };



  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>


        </form>
    </div>
  )
}

export default LoginPage