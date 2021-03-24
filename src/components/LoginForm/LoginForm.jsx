import React, { useEffect, useState } from 'react';
import Button from '../Button/index';
import Loader from '../Loader/index';
  
const LoginForm = (props) => {
    const [username , setUsername] = useState('');


    const {loginError , login, isLoading, error, clearErrorMessage} = props;


useEffect(() => {
    if (error && username) {
        clearErrorMessage();
            }
}, [username])

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       if (username.length < 4 || username.length > 16) {
        loginError();
        return;
        }
        login( {username} );
    }

	return (
	<>
        { isLoading ? (<div className="container signin-loader">
            <Loader />
          </div>) : 	<form className='form login-page__form' onClick={handleSubmit}>
				<label className='form__label' htmlFor='username'>
					Name
				</label>
				<input className='form__input' type='text' id='username'  value={username} onChange={handleChange} />
                {error && username ? <div className="error-msg">Username is not valid.</div> : ''}
          
				<Button type='submit' name='Log In'/>
			</form>
        }
	</>
	);
};

export default LoginForm;
