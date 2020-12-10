import React, { } from 'react';
import './Css/Style.css'
import './Css/Login.css'
import img from '../../../image/img-01.png'
import Tilt from 'react-tilt'
import { useForm } from "react-hook-form";
// import { useHistory, useLocation } from 'react-router-dom';
// import { AuthContext } from './Auth';


const Login = () => {
    document.title = "Login-Page";
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
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
        <div className="login">
            <div className="form-container row mx-auto">
                <div className="col-md-6">
                    <Tilt className="Tilt" options={{ max: 10, scale: 0 }}>
                        <img src={img} alt="" srcset="" />
                    </Tilt>
                </div>
                <div className="col-md-6 card border-0 p-4 ">
                    <div className="card-header text-white text-center font-weight-bolder">
                        Registration Form
                </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" id="fullname" ref={register} name="fullname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter your email" id="email" ref={register} name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="form-control" placeholder="Enter your phone number" id="phone" ref={register} name="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" id="password" ref={register} name="password" />
                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="male" value="male" ref={register} name="gender" />
                                <label className="form-check-label" htmlFor="male">male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="female" value="female" />
                                <label className="form-check-label" htmlFor="female">female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="other" value="other" />
                                <label className="form-check-label" htmlFor="other">other</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="terms" value="agree" ref={register} name="terms_and_condition" />
                                <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
                            </div>
                        </div>
                        <button type="submit" className="btn" >Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;