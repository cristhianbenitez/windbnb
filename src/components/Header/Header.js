import React from 'react';

import { SearchBar, DropdownSearch } from 'components';

import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  const [location, setLocation] = React.useState('');
  const [guests, setGuests] = React.useState('');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isLocationFocused, SetIsLocationClicked] = React.useState(false);

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar
        location={location}
        guests={guests}
        openDropdown={openDropdown}
        SetIsLocationClicked={SetIsLocationClicked}
        // focusGuests={focusGuests}
      />
      {isDropdownOpen && (
        <DropdownSearch
          location={location}
          setLocation={setLocation}
          guests={guests}
          setGuests={setGuests}
          closeDropdown={closeDropdown}
          isLocationFocused={isLocationFocused}
          isDropdownOpen={isDropdownOpen}
        />
      )}
    </header>
  );
};
