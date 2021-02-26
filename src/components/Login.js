import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initCreds = {
  username: '',
  password: '',
};

const Login = () => {
  const [credentials, setCredentials] = useState(initCreds);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const { push } = useHistory();

  const handleChange = (evt) => {
    evt.preventDefault();
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    });
    setErrors('');
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        push('/bubbles');
        setIsLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data.error)
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route '/bubbles'
    //why do I need to wrap this in a use effect if its firing off an onClick?
  });

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            username
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
          {!isLoading ? (
            <button className="login-btn">Log in</button>
          ) : (
            <button className="login-btn loading">Loading</button>
          )}
          {errors && <p style={{ color: `red`, fontSize: '12px' }}>{errors}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
