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
        <div className="page-content">
            <div className="signin-container">
                <div className="signin">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            {errors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                        <div className="title">SIGN IN</div>

                        <div className="form-row">
                            <div className="form-area">
                                <label className="labels" id="signin">SIGN IN WITH USERNAME OR EMAIL</label>
                                <input
                                    className="input"
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form_row">
                            <div className="form_area">
                                <label className="labels">PASSWORD</label>
                                <input
                                    className="input"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit">Log In</button>

                        <button onClick={handleDemoLogin} type="submit">Demo Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;