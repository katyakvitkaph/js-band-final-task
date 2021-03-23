import React, { useState } from 'react';
import Button from '../Button/index'
  
const LoginForm = (props) => {
    const [username , setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = (e) => {
        const {loginError , login} = props;
        e.preventDefault()
       if (username.length < 4 || username.length > 16) {
        loginError();
        return;
        }
        login( {username} );
    }
	return (
	
			<form className='form login-page__form' onClick={handleSubmit}>
				<label className='form__label' htmlFor='username'>
					Name
				</label>
				<input className='form__input' type='text' id='username'  value={username} onChange={handleChange} />
				<Button type='submit' name='Log In'/>
			</form>
	
	);
};

export default LoginForm;
