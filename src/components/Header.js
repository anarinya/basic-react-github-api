import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../util';

const NAV_ITEMS = ['blizzard', 'facebook', 'netflix'];

export default () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo left">Github Repos</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/repos">Repo List</Link></li>
            { NAV_ITEMS.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/repos/${item}`}>{capitalize(item)}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
