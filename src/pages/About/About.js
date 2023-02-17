import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import ModalAbout from './ModalAbout';

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
            <ModalAbout userInfo={userInfo}></ModalAbout>
        </div>
    );
};

export default About;