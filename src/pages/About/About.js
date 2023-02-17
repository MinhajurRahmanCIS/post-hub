import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const About = () => {

    const { user } = useContext(AuthContext);
    const userInfo = useLoaderData();
    let userProfile = userInfo.find(u => u.email === user.email);
    return (
        <div className='grid justify-center items-center'>
            <div className="card bg-base-200 shadow-xl mt-5 rounded-none">
                <div className="card-actions justify-end mr-5 mt-5 ">
                    <label htmlFor="my-modal-6" className="btn">Edit</label>
                </div>
                <figure className="px-10 pt-10 -m-3">
                    <img src={user?.uid && user?.photoURL} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl">Name: {user.displayName}</h2>
                    <h2 className="text-md">Email: {user.email}</h2>
                    <h2 className="text-md">University: {user?.university ? '' : userProfile?.university ? userProfile?.university : 'University not found'}</h2>
                    <h2 className="text-md">Address: {user?.address ? '' : userProfile?.address ? userProfile?.address : 'Address not found'}</h2>
                </div>
            </div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form>
                        <div className="card-body">
                            <h1 className='text-4xl font-bold'>Update User Profile</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" defaultValue={user.displayName} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email address" className="input input-bordered" disabled defaultValue={user?.email} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input name='university' type="text" placeholder="University" className="input input-bordered" defaultValue={user?.university ? '' : userProfile?.university ? userProfile?.university : 'University not found'} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input name='address' type="text" placeholder="Address" className="input input-bordered" defaultValue={user?.address ? '' : userProfile?.address ? userProfile?.address : 'Address not found'} />
                            </div>
                        </div>
                    </form>
                    <div className="modal-action">
                        <button className='btn' type="submit">update</button>
                        <label htmlFor="my-modal-6" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;