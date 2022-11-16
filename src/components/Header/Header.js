import React from 'react';

import { SearchBar, DropdownSearch } from 'components';

import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Header.module.css';

export const Header = ({
  location,
  setLocation,
  guests,
  setGuests,
  stays,
  setResults
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isLocationFocused, SetIsLocationClicked] = React.useState(false);

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo} />
      <SearchBar
        location={location}
        guests={guests}
        openDropdown={openDropdown}
        SetIsLocationClicked={SetIsLocationClicked}
      />
      {isDropdownOpen && (
        <DropdownSearch
          location={location}
          setLocation={setLocation}
          guests={guests}
          setGuests={setGuests}
          closeDropdown={closeDropdown}
          isLocationFocused={isLocationFocused}
          stays={stays}
          setResults={setResults}
        />
      )}
    </header>
  );
};
