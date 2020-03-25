import React, { FC } from 'react';
import classNames from 'classnames';
import { MainNavItems } from '../../constants/data';

import './MainNav.scss';

export const MainNav: FC = () => {
  return (
    <nav className="nav">
      <ul>
        {MainNavItems.map(({
          id, link, icon, value,
        }) => (
          <li key={id} className={classNames('nav-item', { 'nav-item--active': id === 888 })}>
            <a href={link} className="nav__link">
              <span className={icon} />
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
