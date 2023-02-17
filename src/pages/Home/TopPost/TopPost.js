import React from 'react';
import { ImFire } from 'react-icons/im';
const TopPost = () => {
    return (
        
        <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5'>
            <div className="card bg-base-100 shadow-xl rounded-none">
                <figure><img src="https://img.freepik.com/free-vector/dhaka-bangladesh-skyline-silhouette-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_596401-229.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-ghost"><span className='text-secondary'><ImFire></ImFire></span> Top</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl rounded-none">
                <figure><img src="https://img.freepik.com/free-vector/dhaka-bangladesh-skyline-silhouette-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_596401-229.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-ghost"><span className='text-secondary'><ImFire></ImFire></span> Top</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl rounded-none">
                <figure><img src="https://img.freepik.com/free-vector/dhaka-bangladesh-skyline-silhouette-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-website_596401-229.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-ghost"><span className='text-secondary'><ImFire></ImFire></span> Top</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPost;