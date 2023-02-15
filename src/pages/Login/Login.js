import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form onSubmit={handelLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <span> Haven't Account yet? <Link to='/register' className='text-cyan-400 font-bold'>Register</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center">
                        <img className='md:h-[500px] md:w-[700px]' src="https://pathwayport.com/saasland/images/login@4x.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;