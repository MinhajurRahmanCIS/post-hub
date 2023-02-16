import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Post = () => {

    const { user } = useContext(AuthContext);

    const handelPost = event => {
    event.preventDefault();
    const form = event.target;

    const postText = form.postText.value;
    console.log(postText)
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-5">
                <form onSubmit={handelPost} className="card-body">
                    <div className="form-control">
                        <label className="label mb-2">
                            <span className="label-text text-3xl font-bold">Whats your mind, <span className='font-bold text-stone-500'>{user?.uid && user?.displayName}</span></span>
                        </label>
                        <textarea name='postText' type="text" placeholder="Write something..." className="textarea textarea-bordered textarea-lg" ></textarea>
                    </div>
                    <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-lg mt-2" />
                    <div className="card-actions justify-end">
                        <input className="btn" type="submit" value="Post" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Post;