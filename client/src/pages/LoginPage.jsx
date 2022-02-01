import axios from 'axios';
import { useContext, useState } from 'react';
import { useRef } from 'react';
import { Context } from '../context/Context';

const LoginPage = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      setError(true);
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  console.log(isFetching);
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className='loginInput'
          type='text'
          placeholder='Enter your username...'
          ref={userRef}
        />
        <label>Password</label>
        <input
          className='loginInput'
          type='password'
          placeholder='Enter your password...'
          ref={passwordRef}
        />
        <button className='loginButton' type='submit' disabled={isFetching}>
          Login
        </button>
        {error && (
          <span
            style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}
          >
            Username or password is incorrect
          </span>
        )}
      </form>
      <button className='loginRegisterButton'>Register</button>
    </div>
  );
};

export default LoginPage;
