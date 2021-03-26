import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = () => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { push } = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post('http://localhost:5000/api/login', creds)
      .then((res) => {
        console.log(res.data.payload);
        window.localStorage.setItem('token', JSON.stringify(res.data.payload));
        setIsLoading(false);
        push('/bubble-list');
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setError('Username or Password not valid.');
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
        </label>
        {!isLoading ? (
          <button className="login-btn">Log in</button>
        ) : (
          <button className="login-btn loading">Loading</button>
        )}
        {error && <p style={{ color: `red`, fontSize: '12px' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
