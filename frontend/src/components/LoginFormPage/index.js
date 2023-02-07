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

    return (
        <div className="page_content">
            <div className="signin_container">
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            {errors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                        <div className="title">SIGN IN</div>

                        <div className="form_row">
                            <div className="form_area">
                                <label className="labels">Sign in with Username or Email</label>
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
                                <label className="labels">Password</label>
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
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;