import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './admin.css';
import { EyeOff, LockKeyhole, UserCog } from 'lucide-react';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check the username and password
    if (username === 'sanjeev' && password === '123') {
        toast.success('Login successful!', {
            position: 'bottom-center',
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: () => {
              window.location.href = '/Usertable';
            },
          });
    } else {
       alert('Invalid username or password', {
         
      }
      );
    }
  };

  return (
    <div className="card2">
      <h4 className="title">Admin login</h4>
      <form onSubmit={handleLogin}>
        <div className="field">
        <UserCog/>
          <input
            id="logemail"
            placeholder="Username"
            className="input-field"
            name="logemail"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
        <LockKeyhole/>
          <input
            id="logpass"
            placeholder="Password"
            className="input-field"
            name="logpass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Login
        </button>
        <a href="#" className="btn-link">
          Forgot your password?
        </a>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Admin;
