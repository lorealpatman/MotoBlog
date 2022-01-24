import React from 'react';
import Sidebar from '../components/Sidebar';
import SinglePost from '../components/SinglePost';

const SinglePostPage = () => {
  return (
    <div className='singlePostPage'>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePostPage;
