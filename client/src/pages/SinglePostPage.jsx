import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import Sidebar from '../components/Sidebar';
import SinglePost from '../components/SinglePost';

const SinglePostPage = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]; // /post/61f6ef6c5e37041e6455f98d

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className='singlePostPage'>
      <SinglePost post={post} />
      <Sidebar />
    </div>
  );
};

export default SinglePostPage;
