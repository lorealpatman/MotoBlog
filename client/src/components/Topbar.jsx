import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import profilepic from '../images/profilepic.jpg';

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const pubFolder = 'http://localhost:5000/images/';
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className='top'>
      <div className='topLeft'>
        {/* <i className='topIcon fab fa-facebook-square'></i> */}
        <a href='https://www.instagram.com/rev_rosey'>
          <i className='topIcon fab fa-instagram-square'></i>
        </a>
        <a href='https://www.pinterest.com/realtwenty'>
          <i className='topIcon fab fa-pinterest-square'></i>
        </a>
        <a href='https://www.twitter.com/lofi_verse_'>
          <i className='topIcon fab fa-twitter-square'></i>
        </a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          {/* <li className='topListItem'>ABOUT</li> */}
          {/* <li className='topListItem'>CONTACT</li> */}
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          {user && (
            <li className='topListItem' onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link className='link' to='/settings'>
            <img
              className='topImg'
              src={user ? pubFolder + user.profilePicture : profilepic}
              alt=''
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default TopBar;
