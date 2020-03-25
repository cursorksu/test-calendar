import React, { FC, useState } from 'react';
import './Header.scss';
import avatar from '../../images/Avatar.png';
import avatar2x from '../../images/Avatar@2x.png';

export const Header: FC = () => {
  const [isUserMenu, setIsUserMenu] = useState(false);
  const handleUserMenuToggle = () => {
    setIsUserMenu(!isUserMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo__link">
          Impekable
        </a>
      </div>
      <div className="header__menu">
        <div className="search">
          <input
            className="search__input"
            placeholder="Search transactions,
          invoices or help"
            type="text"
          />
        </div>

        <ul className="tool-bar">
          <li className="tool-bar__item support">
            support
          </li>
          <li className="tool-bar__item chat">
            chat
          </li>
          <li className="tool-bar__item message">
            Message
          </li>
          <li className="tool-bar__item user">
            <button
              type="button"
              onClick={handleUserMenuToggle}
              className="user__btn"
            >
              John Doe
            </button>

            <img
              srcSet={`${avatar2x}  38px`}
              sizes="(max-width: 599px) 28px"
              src={avatar}
              alt="John Doe"
            />

            {isUserMenu && (
              <ul className="user__menu">
                <li><a href="/">Profile</a></li>
                <li><a href="/">Agenda</a></li>
                <li><a href="/">Sign Out</a></li>
              </ul>
            )}

          </li>
          <li className="tool-bar__item avatar" />
        </ul>
      </div>
    </header>
  );
};
