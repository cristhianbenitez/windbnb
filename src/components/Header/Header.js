import React from 'react';

import { SearchBar, DropdownSearch } from 'components';

import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      {/* <SearchBar /> */}
      <DropdownSearch />
    </header>
  );
};
