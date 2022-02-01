import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
  const pubFolder = 'http://localhost:5000/images/';
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img className='singlePostImg' src={pubFolder + post.photo} alt='' />
        )}
        <h1 className='singlePostTitle'>
          {post.title}
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author:
            <Link to={`/?user=${post.username}`} className='link'>
              {' '}
              <strong>{post.username}</strong>
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className='singlePostDescr'>{post.descr}</p>
      </div>
    </div>
  );
};

export default SinglePost;
