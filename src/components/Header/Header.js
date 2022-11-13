import React from 'react';

import { SearchBar, DropdownSearch } from 'components';

import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  const [location, setLocation] = React.useState('');
  const [guests, setGuests] = React.useState('');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setIsDropdownOpen(true);

  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar
        location={location}
        guests={guests}
        openDropdown={toggleDropdown}
      />
      {isDropdownOpen && (
        <DropdownSearch
          location={location}
          setLocation={setLocation}
          guests={guests}
          setGuests={setGuests}
          setIsOpen={setIsDropdownOpen}
        />
      )}
    </header>
  );
};
