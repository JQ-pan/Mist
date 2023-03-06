import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
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
        return setErrors(['Passwords do not match']);
    };

    return (
        <div className="page-content">
            <div className="signup-container">
                <div className="signup" >
                    <form onSubmit={handleSubmit}>
                        {/* <ul>
                            {errors.map(error => <li key={error}>{error}</li>)}
                        </ul> */}
                        <div className="title">CREATE YOUR ACCOUNT</div>
                        <div className="form-row">

                            <label className="labels">Email Address</label>
                            <input
                                className="input"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.map(error => {
                                if (error.toLowerCase().startsWith("email")) {
                                    return <span className="error">{error}</span>
                                }
                                return null;
                            })}
                        </div>

                        <div className="form-row">
                            <label className="labels">Username</label>
                            <input
                                className="input"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {errors.map(error => {
                                if (error.toLowerCase().startsWith("username")) {
                                    return <span className="error">{error}</span>
                                }
                                return null;
                            })}
                        </div>

                        <div className="form-row">
                            <label className="labels">Password</label>
                            <input
                                className="input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errors.map(error => {
                                if (error.toLowerCase().startsWith("password")) {
                                    return <span className="error">{error}</span>
                                }
                                return null;
                            })}
                        </div>

                        <div className="form-row">
                            <label className="labels">Confirm Password</label>
                            <input
                                className="input"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {errors.map(error => {
                                if (error.toLowerCase().startsWith("confirm password")) {
                                    return <span className="error">{error}</span>
                                }
                                return null;
                            })}
                        </div>
                        
                        <button className="signup-button"type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupFormPage;

