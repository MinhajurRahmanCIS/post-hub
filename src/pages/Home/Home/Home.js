import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Post from '../Post/Post';
import TopPost from '../TopPost/TopPost';

const Home = () => {
    return (
        <div>
            <TopPost></TopPost>
            <Post></Post>
            <Footer></Footer>
        </div>
    );
};

export default Home;