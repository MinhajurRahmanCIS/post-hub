import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { BsGoogle } from 'react-icons/bs';
const Login = () => {
    
    const {login, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err));
    }

    const handelGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <form onSubmit={handelLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-4xl font-bold '>Login</h1>
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
                            <div className="form-control mt-1">
                                <button onClick={handelGoogleLogin} className="btn btn-info text-2xl"><BsGoogle></BsGoogle></button>
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