import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]; // /post/61f6ef6c5e37041e6455f98d
  const pubFolder = 'http://localhost:5000/images/';
  const { user } = useContext(Context);

  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescr(res.data.descr);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        descr,
      });
      window.location.reload();
    } catch (error) {}
  };
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img className='singlePostImg' src={pubFolder + post.photo} alt='' />
        )}
        {updateMode ? (
          <input
            type='text'
            value={title}
            className='singlePostTitleInput'
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className='singlePostTitle'>
            {title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon far fa-edit'
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className='singlePostIcon far fa-trash-alt'
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

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
        {updateMode ? (
          <textarea
            className='singlePostDescrInput'
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          ></textarea>
        ) : (
          <p className='singlePostDescr'>{post.descr}</p>
        )}

        {updateMode && (
          <button className='singlePostButton' onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
