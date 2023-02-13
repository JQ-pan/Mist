import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const handleDemoLogin = (e) => {
        setCredential('guest@guest.com');
        setPassword('password');
    }

    return (
        <div className="login-page-content">
            <form className="login-form" onSubmit={handleSubmit}>

                <div className="login-title">SIGN IN</div>
                <div className="login-form-container">

                    <div className="login-form-area username">
                        <label className="labels" id="login">SIGN IN WITH USERNAME OR EMAIL</label>
                        <input
                            className={`login-inputs ${errors.length > 0 ? "login-form-error" : ""}`}
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-form-area">
                        <label className="login-labels">PASSWORD</label>
                        <input
                            className={`login-inputs ${errors.length > 0 ? "login-form-error" : ""}`}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-button-container">
                        <button className="login-button" type="submit">Sign In</button>
                        <button className="login-button" onClick={handleDemoLogin} type="submit">Demo Sign In</button>
                    </div>

                    <ul className="login-errors">
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>

                </div>
            </form>
        </div>
    );
}

export default LoginFormPage;