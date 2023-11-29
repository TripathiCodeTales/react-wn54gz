import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '20',
        }}
    >
      <img src=""/>
      <div>
        <FaPhoneAlt />
        <ul>
          <li>
            <a className="link-default" href="tel:#">
              1-800-1234-567
            </a>
            <br />
            <a className="link-default" href="tel:#">
              1-800-8763-765
            </a>
          </li>
        </ul>
      </div>
      <div>
        <FaMapMarkerAlt />
        &nbsp;
        <a className="link-default" href="tel:#">
          2130 Fulton Street <br /> San Diego, CA 94117-1080
        </a>
        <br />
        <br />
      </div>

      <div>
        <a
          class="button button-primary-outline button-winona"
          href="tours.html"
        >
          Find your tour
        </a>
      </div>
    </div>
  );
};

export default Header;
