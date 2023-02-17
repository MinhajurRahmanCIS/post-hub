import React from 'react';
import { useLoaderData } from 'react-router-dom';
const TopPost = () => {
    const topPosts = useLoaderData();
    console.log(topPosts)
    return (

        <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5'>
            {
                topPosts.map((topPost, i) => <div key={i} className="card bg-base-100 shadow-xl rounded-none">
                    <figure><img className='h-[300px]' src={topPost.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>{topPost.postDescription}</p>
                        <p className='text-xs'>post by {topPost.name}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Top ❤️</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TopPost;