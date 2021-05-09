import React from 'react';

function Login(props) {
    return (
    <div className="body-box">
        <form className="box" action="login.html" method="post">
            <h1><b>Sign In</b></h1>
            <h3>Don’t have an account?  Sign Up.</h3>
            <input type="text" name="" placeholder="Email*"/>
            <input type="password" name="" placeholder="Password*"/>
            <h4><i>Fields that are marked with * sign are required.</i></h4>
            <input type="submit" name="" value="SEND"/>
            <h3>Forgot your password?  Reset password</h3>
        </form>

    </div>
    );
}

export default Login;