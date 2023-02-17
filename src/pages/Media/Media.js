import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
const Media = () => {

    const [heartReact, setHeartReact] = useState(false);
    const [previousHeart, setPreviousHeart] = useState(null);
    const [heart, setHeart] = useState(0);

    const handleLikeClick = () => {
        if (heartReact) {
            setHeartReact(false);
            setHeart(heart - 1);
            // setPreviousHeart(previousHeart - heart);

        } else {
            setHeartReact(true);
            setHeart(heart + 1);
            // setPreviousHeart(previousHeart + heart);
        }
    };

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5'>
            <div className="card bg-base-100 shadow-xl mt-5 p-5 rounded-none">
                <div className="card bg-base-100 shadow-xl rounded-none">
                    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button onClick={handleLikeClick}>{heartReact ? <><span className='text-red-500 text-2xl'><BsSuitHeartFill></BsSuitHeartFill></span></> : <span className='text-2xl'><><BsSuitHeart></BsSuitHeart></></span>}</button>
                        <p className='text-sm font-semibold ml-2'>{heart}</p>
                        <h2 className="card-title">Dhaka</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link className="btn btn-primary">Details</Link>
                        </div>
                    </div>
                </div>
                <textarea placeholder="Write a comment..." className="textarea textarea-bordered textarea-sm mt-3" ></textarea>
            </div>

        </div>
    );
};

export default Media;