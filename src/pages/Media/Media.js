import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import { AuthContext } from '../context/AuthProvider';
const Media = () => {
    const posts = useLoaderData();
    const { user } = useContext(AuthContext);
    const [likes, setLikes] = useState(0);

    // State variable to keep track of whether the button is currently liked
    const [liked, setLiked] = useState(false);

    // Function to handle button click event
    const handleLikeClick = (email) => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
    }

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5'>
            {
                posts.map((post, i) => <div key={i} className="card bg-base-100 shadow-xl mt-5 p-5 rounded-none border border-stone-100">
                    <div className="card bg-base-100 shadow-xl rounded-none border border-stone-300">
                        <figure><img className='h-[300px]' src={post.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <button onClick={() => handleLikeClick(posts.email)}>{liked ? <><span className='text-red-500 text-2xl'><BsSuitHeartFill></BsSuitHeartFill></span></> : <span className='text-2xl'><><BsSuitHeart></BsSuitHeart></></span>}</button>
                            <p className='text-2xl font-semibold ml-2'>{liked}</p>
                            <p>{post.postDescription}</p>
                            <p className='text-xs'>Posted by <span className='font-bold'>{post.name}</span></p>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${post._id}`} className="btn bg-indigo-600 border-none">Details</Link>
                            </div>
                        </div>
                    </div>
                    {
                        user?.uid ?
                            <>
                                <textarea placeholder="Write a comment..." className="textarea textarea-bordered textarea-sm mt-3" ></textarea>

                            </>
                            :
                            <>

                            </>
                    }

                </div>)
            }

        </div>
    );
};

export default Media;