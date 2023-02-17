import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const About = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='grid justify-center items-center'>
            <div className="card bg-base-200 shadow-xl mt-5 rounded-none">
            <div className="card-actions justify-end mr-5 mt-5 ">
                <button className="btn">Edit</button>
            </div>
            <figure className="px-10 pt-10 -m-3">
                <img src={user?.uid && user?.photoURL} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl">Name: {user?.uid && user?.displayName}</h2>
                <h2 className="text-md">Email: {user?.uid && user?.email}</h2>
                <h2 className="text-md">University: Oxford University</h2>
                <p>Address: Calafonia, USA</p>
            </div>
        </div>
        </div>
    );
};

export default About;