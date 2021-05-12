import React from 'react';
import { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";

function Login(props) {
    
    // const[email, setEmail] = useState('');
    // const[password, setPassword] = useState('');

    const{ handleChange, values, handleSubmit, errors } = useForm(validate);


    return (
        
    <div className="body-box">
        <form className="box" onSubmit={handleSubmit}>
            <h1><b>Sign In</b></h1>
            
            <h3>Don’t have an account?<Link to ="/signup">  Sign Up</Link></h3>
            
            <input 
                type="email" 
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                name="email"
                className='form-email'
                placeholder="Email*"
                value = {values.email} 
                onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            
            <input 
                type="password" 
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                name="password" 
                placeholder="Password*"
                value={values.password}
                onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            
            <h4><i>Fields that are marked with * sign are required.</i></h4>
            
            <input 
                type="submit" 
                name="" 
                value="SEND"
            />
            
            <h3>Forgot your password?<a href='#'>  Reset password</a></h3>
        
        </form>

    </div>
    
    );
}

export default Login;