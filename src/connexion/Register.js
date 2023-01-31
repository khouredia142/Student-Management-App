import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/style.css'

import '../assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css'

function Register() {
    return (
        <>
        
        <div class="authincation h-100">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-6">
                        <div class="authincation-content">
                            <div class="row no-gutters">
                                <div class="col-xl-12">
                                    <div class="auth-form">
                                        <div class="text-center mb-3">
                                            <img src="images/logo-full.png" alt=""/>
                                        </div>
                                        <h4 class="text-center mb-4">Sign up your account</h4>
                                        <form action="index.html">
                                            <div class="form-group">
                                                <label class="mb-1"><strong>Username</strong></label>
                                                <input type="text" class="form-control" placeholder="username"/>
                                            </div>
                                            <div class="form-group">
                                                <label class="mb-1"><strong>Email</strong></label>
                                                <input type="email" class="form-control" placeholder="hello@example.com"/>
                                            </div>
                                            <div class="form-group">
                                                <label class="mb-1"><strong>Password</strong></label>
                                                <input type="password" class="form-control" value="Password"/>
                                            </div>
                                            <div class="text-center mt-4">
                                                <button type="submit" class="btn btn-primary btn-block">Sign me up</button>
                                            </div>
                                        </form>
                                        <NavLink to="/">
                                        <div class="new-account mt-3">
                                            <p>Already have an account? <i  class="text-primary" >Sign in</i></p>
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


        </>

    );
}
export default Register;