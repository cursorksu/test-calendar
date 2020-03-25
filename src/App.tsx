import React, { FC } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { UserCalendar } from './components/UserCalendar';

import './styles/reset.scss';
import './styles/App.scss';


export const App: FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main className="main">
        <div className="container">
          <UserCalendar />
        </div>
      </main>
    </>
  );
};
