import React, { useState } from 'react'
import axios from 'axios';


function LoginForm() {
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const projectID="95bc665e-1f2e-4146-bf3e-3b0119f978c7" 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials !!');
    }
  };
  return (
    <div className="wrapper">
    <div className="form">
      <h1 className="title">Chat Application</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
        <div align="center">
          <button type="submit" className="button">
            <span>Start chatting</span>
          </button>
        </div>
      </form>
      <h2 style={{color:'white', textAlign:'center',textShadow:'3px 3px 0 #b92b27'}}>{error}</h2>
    </div>
  </div>

);
}

export default LoginForm
