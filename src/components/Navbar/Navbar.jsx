import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <ul>
        <li>
          <Link to='/'>Overview</Link>
        </li>
        <li>
          <Link to='/job-search'>Job Search</Link>
        </li>
        <li>
          <Link to='/estimated-salary'>Estimated Salary</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
