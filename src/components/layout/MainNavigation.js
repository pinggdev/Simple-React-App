import { Link } from "react-router-dom";

import classess from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classess.header}>
      <div className={classess.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
