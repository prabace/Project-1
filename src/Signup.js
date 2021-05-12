import React from 'react';
import { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";

function Signup(props) {

    const{ handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        
        <div className="body-box">
            <form className="box" onSubmit={handleSubmit}>
                <h1><b>Sign Up</b></h1>
                <h2>Manage your projects like nowhere else.</h2>
                    
                    <input
                        type="text"
                        required
                        name="firstName"
                        className='form-firstName'
                        placeholder="First Name*"
                        value = {values.firstName}
                        onChange={handleChange}
                    />
               
                    {errors.firstName && <p>{errors.firstName}</p>}
                
                
                    <input
                        type="text"
                        required
                        name="lastName"
                        className='form-lastName'
                        placeholder="Last Name*"
                        value = {values.lastName}
                        onChange={handleChange}
                    />
                
                    {errors.lastName && <p>{errors.lastName}</p>}
                
                <input 
                type="email"
                required
                name="email"
                className='form-email'
                placeholder="Email*"
                value = {values.email}
                inChange={handleChange}
                />
                    {errors.email && <p>{errors.email}</p>}

                <input
                type="password"
                required 
                name="password"
                className='form-password'
                placeholder="Password*"
                value = {values.password}
                inChange={handleChange}
                />
                    {errors.password && <p>{errors.password}</p>}

                    <h4><i>Fields that are marked with * sign are required.</i></h4>

                <input
                    type="submit"
                    name=""
                    value="SEND"
                />
                <h3>Already have an account? <Link to="/">Sign In</Link></h3>
            </form>        
        </div>
    ); 
}

export default Signup;