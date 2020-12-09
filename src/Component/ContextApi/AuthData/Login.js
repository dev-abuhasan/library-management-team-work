import React, { } from 'react';
import './Css/Style.css'
import { Container } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router-dom';
// import { AuthContext } from './Auth';


const Login = () => {
    document.title = "Login-Page";
    //get user login form auth.js file
    // const auth = useContext(AuthContext);
    // const { handleGoogleSignIn } = auth;

    //redirect to path settings
    // const location = useLocation();
    // const history = useHistory()
    // let { from } = location.state || { from: { pathname: "/dashboard" } };

    //google sign in 
    // const handGoogleSign = () => {
    //     handleGoogleSignIn()
    //         .then(r => {
    //             history.replace(from);
    //         })
    // }

   
    return (
        <Container id="login" className="">
            
        </Container>
    );
};
export default Login;