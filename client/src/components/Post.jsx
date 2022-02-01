import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const pubFolder = 'http://localhost:5000/images/';
  return (
    <div className='post'>
      {post.photo && (
        <img className='postImg' src={pubFolder + post.photo} alt='' />
      )}

      <div className='postInfo'>
        <div className='postCategories'>
          {post.categories.map((c) => (
            <span className='postCategory' key={post._id}>
              {c.name}{' '}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className='link'>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='postDescription'>{post.descr}</p>
    </div>
  );
};

export default Post;
