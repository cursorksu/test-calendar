import React, { FC } from 'react';
import { MainNav } from '../MainNav';

import './Navigation.scss';

export const Navigation: FC = () => {
  return (
    <aside className="aside">
      <MainNav />
    </aside>
  );
};
