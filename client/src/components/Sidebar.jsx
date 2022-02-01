// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import me from '../images/me.jpg';

const Sidebar = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     const res = await axios.get('/categories');
  //     setCategories(res.data);
  //   };
  //   getCategories();
  // }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src={me} alt='' className='sidebarImg' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      {/* <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {categories.map((c) => (
            <Link to={`/?category=${c.name}`} className='link' key={c._id}>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW</span>
        <div className='sidebarSocial'>
          {/* <i className='sidebarIcon fab fa-facebook-square'></i> */}
          <a href='https://www.instagram.com/rev_rosey'>
            <i className='sidebarIcon fab fa-instagram-square'></i>
          </a>
          <a href='https://www.pinterest.com/realtwenty'>
            <i className='sidebarIcon fab fa-pinterest-square'></i>
          </a>
          <a href='https://www.twitter.com/lofi_verse_'>
            <i className='sidebarIcon fab fa-twitter-square'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
