import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Footer from '../Shared/Footer/Footer';

const Details = () => {
    const postDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://post-hub-server.vercel.app/comments')
            .then(res => res.json())
            .then(comments => {
                setComments(comments);
            })
    }, []);
    let userGiveComment = comments.filter(c => c.postId === postDetails._id);

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

            {
                user?.uid ? <>
                    {
                        userGiveComment.length === 0 ?
                            <>

                                <div className='mt-5 grid justify-center justify-items-center text-2xl font-bold'>No comments!</div>

                            </>
                            :
                            <>
                                <h2 className='text-2xl my-8 font-bold text-center '>Comments</h2>
                                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5'>
                                    {
                                        userGiveComment.map((uc, i) =>
                                            <div className="card bg-base-100 shadow-xl mt-5">
                                                <div key={i} className="card-body">
                                                    <div className="avatar justify-start">
                                                        <div className="w-12 rounded-full">
                                                            <img src={uc.userImg} alt='' />
                                                        </div>
                                                    </div>
                                                    <h2 className="card-title">{uc.userName}</h2>
                                                    <p>{uc.userComment}</p>
                                                </div>
                                            </div>)


                                    }
                                </div>
                            </>


                    }
                </>
                    :
                    <>
                    <div className='mt-10 grid justify-center justify-items-center text-2xl font-bold'>Login to show comments</div>
                    </>
            }



            <div className='mt-24'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Details;