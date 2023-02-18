import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Post = () => {
    const { user } = useContext(AuthContext);
    const imageHostKey = process.env.React_APP_imgbb_key;
    console.log(imageHostKey);

    const handelPost = event => {
        event.preventDefault();
        const form = event.target;

        const postText = form.postText.value;
        const image = form.image.files[0];
        console.log(postText, image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {

                    const postInfo = {
                        name: user?.displayName,
                        email: user?.email,
                        postDescription: postText,
                        img: imgData.data.url
                    }
                    console.log(postInfo)

                    fetch('https://post-hub-server.vercel.app/posts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postInfo)
                })
                .then(res => res.json())
                .then(result =>{
                        alert('success');
                        form.reset();
                })
                }
            })



    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-5">
                <form onSubmit={handelPost} className="card-body">
                    <div className="form-control">
                        <label className="label mb-2">
                            <span className="label-text text-3xl font-bold">What's your mind, <span className='font-bold text-stone-500'>{user?.uid && user?.displayName}</span></span>
                        </label>
                        <textarea name='postText' type="text" placeholder="Write something..." className="textarea textarea-bordered textarea-lg" ></textarea>
                    </div>
                    <input name='image' type="file" className="file-input file-input-bordered file-input-md w-full max-w-lg mt-2" />
                    <div className="card-actions justify-end">
                        {
                            user?.uid ?
                                <>
                                    <input className="btn" type="submit" value="Post" />

                                </>
                                :
                                <>
                                    <Link to='/login' className="btn">Login to post</Link>
                                </>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Post;