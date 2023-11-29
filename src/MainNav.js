import React from 'react';

const MainNav = () => {
  return (
    <div>
      <ul className="rd-navbar-nav">
        <li className="rd-nav-item active">
          <a className="rd-nav-link" href="index.html">
            Home
          </a>
        </li>
        <li className="rd-nav-item">
          <a className="rd-nav-link" href="#">
            Features
          </a>
        </li>
        <li className="rd-nav-item">
          <a className="rd-nav-link" href="tours.html">
            Tours
          </a>
        </li>
        <li className="rd-nav-item">
          <a className="rd-nav-link" href="#">
            Blog
          </a>
        </li>
        <li className="rd-nav-item">
          <a className="rd-nav-link" href="#">
            Destinations
          </a>
        </li>
        <li class="rd-nav-item"><a class="rd-nav-link" href="#">Pages</a>
        </li>
        <li class="rd-nav-item"><a class="rd-nav-link" href="contacts.html">Contacts</a>
        </li>
      </ul>
    </div>
  );
};
export default MainNav;
