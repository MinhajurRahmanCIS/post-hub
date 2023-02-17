import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Details = () => {
    const postDetails = useLoaderData();
    console.log(postDetails)
    return (
        <div>
            <div className="hero mt-28 bg-base-100 shadow-2xl border border-gray-200">
                <div className="hero-content flex-col lg:flex-row-reverse border-zinc-100">
                    <img className='h-[400px] shadow-2xl' src={postDetails.img} alt='pic' />
                    <div>
                        <h1 className="text-2xl font-bold">Posted by {postDetails.name}</h1>
                        <p className="py-6">{postDetails.postDescription}.</p>
                        <h1 className="text-sm font-semibold">Sent mail to {postDetails.email}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Details;