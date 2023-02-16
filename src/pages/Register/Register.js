import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { BsGoogle } from 'react-icons/bs';
const Register = () => {

    const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext);

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        if(password.length < 6 ){
            alert('Password should be 6 or longer');
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            const userInfo = {
                displayName: name
            }
            updateUser(userInfo)
            .then(() => {})
            .catch(err => console.error(err))
            console.log(user);
        })
        .catch(err => 
            console.error(err));
    }

    const handelGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center">
                        <img className='md:h-[500px] md:w-[700px]' src="https://app.dfavo.com/assets/login/images/login-image.svg" alt="" />
                    </div>
                    <form onSubmit={handelRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <h1 className='text-4xl font-bold'>Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                    <span> Already have Account? <Link to='/login' className='text-cyan-400 font-bold'>Login</Link></span>
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
                </div>
            </div>
        </div>
    );
};

export default Register;