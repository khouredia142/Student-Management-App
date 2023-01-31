import React from "react";
import '../assets/css/style.css'

import '../assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css'
import { NavLink } from "react-router-dom";


function Login() {
    return (
        <>
            <body class="vh-100">
                <div class="authincation h-100">
                    <div class="container h-100">
                        <div class="row justify-content-center h-100 align-items-center">
                            <div class="col-md-6">
                                <div class="authincation-content">
                                    <div class="row no-gutters">
                                        <div class="col-xl-12">
                                            <div class="auth-form">
                                                <div class="text-center mb-3">
                                                    <img src="images/logo-full.png" alt="" />
                                                </div>
                                                <h4 class="text-center mb-4">Sign in your account</h4>
                                                <form action="index.html">
                                                    <div class="form-group">
                                                        <label class="mb-1"><strong>Email</strong></label>
                                                        <input type="email" class="form-control" value="hello@example.com" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="mb-1"><strong>Password</strong></label>
                                                        <input type="password" class="form-control" value="Password" />
                                                    </div>
                                                    <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                                        <div class="form-group">
                                                            <div class="custom-control custom-checkbox ml-1">
                                                                <input type="checkbox" class="custom-control-input" id="basic_checkbox_1" />
                                                                <label class="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
                                                            </div>
                                                        </div>
                                                        <NavLink to="/Forget">
                                                            <div class="form-group">
                                                                <p>Forgot Password?</p>
                                                            </div>
                                                        </NavLink>
                                                    </div>
                                                    <div class="text-center">
                                                        <NavLink to="/liste-des-etudiants">
                                                            <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                                        </NavLink>
                                                    </div>
                                                </form>
                                                <NavLink to="/Register">
                                                    <div class="new-account mt-3">
                                                        <p>Don't have an account? <i class="text-primary">Sign up</i></p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>


        </>

    );
}
export default Login;