import { useContext } from 'react';
import { Link } from 'react-router-dom';

import SwitchButton from '../SwitchButton/SwitchButton';
import { ColorModeContext } from '../../Utils/ColorMode';

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ColorModeContext);

  return (
    <div>
      <SwitchButton checkMode={isDarkMode} changeMode={toggleDarkMode} />

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
